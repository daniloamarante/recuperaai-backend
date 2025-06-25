
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  const { license_key, store_url, platform } = req.body;

  if (!license_key || !store_url || !platform) {
    return res.status(400).json({ error: 'Campos obrigatórios ausentes.' });
  }

  try {
    const created = await prisma.license.create({
      data: {
        licenseKey: license_key,
        storeUrl: store_url,
        platform,
        status: 'active',
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      }
    });

    res.json({ success: true, license: created });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao ativar licença.' });
  }
});

module.exports = router;
