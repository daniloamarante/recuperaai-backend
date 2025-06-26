const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

// Importando middlewares
const apiKeyAuth = require('./src/middlewares/apiKeyAuth');
const webhookSecret = require('./src/middlewares/webhookSecret');

// Rota pública de health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Aplica API Key para todas as rotas abaixo
app.use(apiKeyAuth);

// Rotas protegidas
const licenseRoutes = require('./src/routes/license');
app.use('/license', licenseRoutes);

const checkLicense = require('./src/utils/checkLicense');

const webhookRoutes = require('./src/routes/webhook');
app.use('/webhook', webhookSecret, checkLicense, webhookRoutes);

const campaignRoutes = require('./src/routes/campaigns');
app.use('/campaigns', checkLicense, campaignRoutes);

// Rota base opcional
app.get('/', (req, res) => {
  res.send('RecuperaAI Backend funcionando! 🚀');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
