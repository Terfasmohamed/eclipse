const express = require('express');
const router = express.Router();
const Participants = require('../models/Participants');

router.post('/', async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const participant = new Participant({ fullName, email });
    await participant.save();
    res.status(201).json(participant);
  } catch (err) {
    res.status(400).json({ message: 'Error creating participant', error: err });
  }
});

router.get('/', async (req, res) => {
  try {
    const participants = await Participant.find();
    res.json(participants);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching participants', error: err });
  }
});

module.exports = router;