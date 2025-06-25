
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  const { name, type, triggerDelay, status, subject, content } = req.body;

  if (!name || !type || !triggerDelay || !content) {
    return res.status(400).json({ error: 'Campos obrigatórios ausentes.' });
  }

  try {
    const campaign = await prisma.campaign.create({
      data: {
        name,
        type,
        triggerDelay,
        status: status || 'draft',
        subject,
        content
      }
    });

    res.json({ success: true, campaign });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar campanha.' });
  }
});

router.get('/', async (req, res) => {
  try {
    const campaigns = await prisma.campaign.findMany({
      orderBy: { createdAt: 'desc' }
    });

    res.json({ success: true, campaigns });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar campanhas.' });
  }
});

module.exports = router;
