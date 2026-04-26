const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'API do Garage Log funcionando.' }));

// Rotas do nosso novo app
app.use('/api/vehicles', require('./routes/vehicleRoutes'));
app.use('/api/maintenances', require('./routes/maintenanceRoutes'));

// Conectando ao banco de dados garage_log
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/garage_log')
  .then(() =>
    app.listen(process.env.PORT || 3000, () =>
      console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`)
    )
  );