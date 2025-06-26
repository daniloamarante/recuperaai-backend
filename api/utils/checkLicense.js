
const { PrismaClient } = require('../../../prisma/generated/client');
const prisma = new PrismaClient();

module.exports = async function checkLicense(req, res, next) {
  const licenseKey = req.headers['x-license-key'];

  if (!licenseKey) {
    return res.status(401).json({ error: 'Licença não fornecida.' });
  }

  try {
    const license = await prisma.license.findUnique({
      where: { licenseKey }
    });

    if (!license) {
      return res.status(401).json({ error: 'Licença inválida.' });
    }

    const today = new Date();
    const expires = new Date(license.expiresAt);

    if (license.status !== 'active' || expires < today) {
      return res.status(403).json({ error: 'Licença expirada ou inativa.' });
    }

    req.license = license;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro na validação da licença.' });
  }
};
