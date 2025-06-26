// src/middlewares/webhookSecret.js
module.exports = function webhookSecret(req, res, next) {
    const receivedSecret = req.headers['x-webhook-secret'];
    if (!receivedSecret || receivedSecret !== process.env.WEBHOOK_SECRET) {
      return res.status(403).json({ error: 'Webhook Secret inválido' });
    }
    next();
  };
  