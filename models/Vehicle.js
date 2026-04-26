const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  brand: { type: String, required: true, trim: true },
  model: { type: String, required: true, trim: true },
  year: { type: Number, required: true },
  type: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Vehicle', vehicleSchema);