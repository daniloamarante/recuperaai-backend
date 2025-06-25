
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/woocommerce', async (req, res) => {
  const { customer_name, customer_email, items, total } = req.body;

  if (!customer_email || !items || !total) {
    return res.status(400).json({ error: 'Campos obrigatórios ausentes.' });
  }

  try {
    const cart = await prisma.abandonedCart.create({
      data: {
        customerName: customer_name || null,
        customerEmail: customer_email,
        cartItems: items,
        cartValue: parseFloat(total),
        status: 'abandoned'
      }
    });

    res.json({ success: true, cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao processar webhook.' });
  }
});

router.get('/carts', async (req, res) => {
  try {
    const carts = await prisma.abandonedCart.findMany({
      orderBy: { abandonedAt: 'desc' }
    });

    res.json({ success: true, carts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar carrinhos.' });
  }
});

router.patch('/cart/:id/recover', async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await prisma.abandonedCart.update({
      where: { id },
      data: { status: 'recovered' }
    });

    res.json({ success: true, cart: updated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar carrinho.' });
  }
});

router.patch('/cart/:id/attach-campaign', async (req, res) => {
  const { id } = req.params;
  const { campaignId } = req.body;

  try {
    const cartExists = await prisma.abandonedCart.findUnique({ where: { id } });
    if (!cartExists) return res.status(404).json({ error: 'Carrinho não encontrado para vincular campanha.' });

    const updatedCart = await prisma.abandonedCart.update({
      where: { id },
      data: { campaignId }
    });

    res.json({ success: true, cart: updatedCart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao associar campanha ao carrinho.' });
  }
});

router.post('/cart/:id/send-campaign', async (req, res) => {
  try {
    const { id } = req.params;

    const cart = await prisma.abandonedCart.findUnique({
      where: { id },
      include: { campaign: true }
    });

    if (!cart) return res.status(404).json({ error: 'Carrinho não encontrado.' });
    if (!cart.campaign) return res.status(400).json({ error: 'Carrinho não possui campanha associada.' });

    await prisma.abandonedCart.update({
      where: { id },
      data: { status: 'processing' }
    });

    const delayMs = cart.campaign.triggerDelay * 60 * 1000;

    console.log(`⏳ Envio de campanha "${cart.campaign.name}" agendado para ${cart.customerEmail} em ${cart.campaign.triggerDelay} minutos`);

    setTimeout(async () => {
      try {
        const updatedCart = await prisma.abandonedCart.findUnique({
          where: { id },
          include: { campaign: true }
        });

        if (!updatedCart) {
          console.log(`❌ Carrinho ${id} não encontrado no momento do envio.`);
          return;
        }

        console.log(`📤 [DISPARADO] ${updatedCart.customerEmail}`);
        console.log(`🧾 Assunto: ${updatedCart.campaign?.subject}`);
        console.log(`💬 Conteúdo: ${updatedCart.campaign?.content}`);

        await prisma.abandonedCart.update({
          where: { id },
          data: { status: 'recovered' }
        });

        console.log(`✅ Carrinho ${id} marcado como "recovered" após envio`);
      } catch (err) {
        console.error('❌ Erro ao processar envio agendado:', err);
      }
    }, delayMs);

    res.json({
      success: true,
      scheduledIn: cart.campaign.triggerDelay,
      message: 'Envio agendado com sucesso.'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao agendar envio.' });
  }
});

module.exports = router;
