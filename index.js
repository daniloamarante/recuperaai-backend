
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const licenseRoutes = require('./api/routes/license');
app.use('/license', licenseRoutes);

const checkLicense = require('./api/utils/checkLicense');

const webhookRoutes = require('./api/routes/webhook');
app.use('/webhook', checkLicense, webhookRoutes);

const campaignRoutes = require('./api/routes/campaigns');
app.use('/campaigns', checkLicense, campaignRoutes);

app.get('/', (req, res) => {
  res.send('RecuperaAI Backend funcionando! 🚀');
});

// Rota de saúde (health check)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
