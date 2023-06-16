const express = require('express');
const pasienController = require('../controllers/pasiencontroller');

const router = express.Router();

// Create a new Pasien
router.post('/pasien', pasienController.createPasien);

// Get all Pasien
router.get('/pasien', pasienController.getAllPasien);

// Get a single Pasien by ID
router.get('/pasien/:_id', pasienController.getPasienById);

// Update a Pasien
router.put('/pasien/:_id', pasienController.updatePasien);

// Delete a Pasien
router.delete('/pasien/:_id', pasienController.deletePasien);

module.exports = router;
