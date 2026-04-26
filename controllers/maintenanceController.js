const MaintenanceRecord = require('../models/MaintenanceRecord');

exports.listEntries = async (req, res) => {
  // O .populate traz os dados do veículo junto com a manutenção
  const entries = await MaintenanceRecord.find().populate('vehicleId');
  res.json(entries);
};

exports.getEntryById = async (req, res) => {
  const entry = await MaintenanceRecord.findById(req.params.id);
  if (!entry) return res.status(404).json({ message: 'Registro não encontrado.' });
  res.json(entry);
};

exports.createEntry = async (req, res) => {
  const entry = await MaintenanceRecord.create(req.body);
  res.status(201).json(entry);
};

exports.updateEntry = async (req, res) => {
  const entry = await MaintenanceRecord.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!entry) return res.status(404).json({ message: 'Registro não encontrado.' });
  res.json(entry);
};

exports.deleteEntry = async (req, res) => {
  await MaintenanceRecord.findByIdAndDelete(req.params.id);
  res.json({ message: 'Registro removido.' });
};