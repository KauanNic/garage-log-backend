const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenanceController');

router.get('/', maintenanceController.listEntries);
router.get('/:id', maintenanceController.getEntryById);
router.post('/', maintenanceController.createEntry);
router.put('/:id', maintenanceController.updateEntry);
router.delete('/:id', maintenanceController.deleteEntry);

module.exports = router;