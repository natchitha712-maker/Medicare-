.const express = require('express');
const router = express.Router();

// GET /patients - list patients (placeholder)
router.get('/', (req, res) => {
  res.json({ patients: [] });
});

// POST /patients - create a patient (placeholder)
router.post('/', (req, res) => {
  // TODO: implement patient creation
  res.status(201).json({ message: 'Patient created' });
});

module.exports = router;
