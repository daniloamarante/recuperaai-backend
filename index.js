require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

// Importa middlewares com caminho correto
const apiKeyAuth = require('./src/middlewares/apiKeyAuth');
const webhookSecret = require('./src/middlewares/webhookSecret');
const checkLicense = require('./api/utils/checkLicense');

// Health check público
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Protege rotas com API Key
app.use(apiKeyAuth);

// Rotas protegidas
const licenseRoutes = require('./api/routes/license');
app.use('/license', licenseRoutes);

const webhookRoutes = require('./api/routes/webhook');
app.use('/webhook', webhookSecret, checkLicense, webhookRoutes);

const campaignRoutes = require('./api/routes/campaigns');
app.use('/campaigns', checkLicense, campaignRoutes);

// Rota de apresentação (opcional)
app.get('/', (req, res) => {
  res.send('RecuperaAI Backend funcionando! 🚀');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
