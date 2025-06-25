
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

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
