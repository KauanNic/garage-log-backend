const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.get('/', vehicleController.listVehicles);
router.post('/', vehicleController.createVehicle);
router.delete('/:id', vehicleController.deleteVehicle);

module.exports = router;