const mongoose = require('mongoose');

const maintenanceSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  happenedAt: { type: Date, required: true },
  vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true } // Conecta a manutenção ao veículo
}, { timestamps: true });

module.exports = mongoose.model('MaintenanceRecord', maintenanceSchema);