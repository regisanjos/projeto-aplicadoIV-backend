const prisma = require('../config/db'); // Importando o Prisma Client do db.js

// Obter relatório geral de doações (contagem de doações por status)
exports.getDonationReport = async (req, res) => {
  try {
    const donationReport = await prisma.donation.groupBy({
      by: ['status'],
      _count: {
        id: true,
      },
    });

    res.status(200).json(donationReport);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao gerar relatório de doações' });
  }
};

// Obter relatório de doações de um usuário específico
exports.getUserDonationReport = async (req, res) => {
  const { userId } = req.params;

  try {
    const userDonationReport = await prisma.donation.groupBy({
      by: ['status'],
      where: {
        userId: parseInt(userId),
      },
      _count: {
        id: true,
      },
    });

    res.status(200).json(userDonationReport);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao gerar relatório de doações para o usuário' });
  }
};

// Obter relatório de necessidades (contagem de necessidades)
exports.getNeedsReport = async (req, res) => {
  try {
    const needsReport = await prisma.needs.aggregate({
      _count: {
        id: true,
      },
      _sum: {
        quantity: true,
      },
    });

    res.status(200).json(needsReport);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao gerar relatório de necessidades' });
  }
};

// Obter relatório geral de usuários (contagem de doadores e recebedores)
exports.getUserReport = async (req, res) => {
  try {
    const userReport = await prisma.user.groupBy({
      by: ['role'],
      _count: {
        id: true,
      },
    });

    res.status(200).json(userReport);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao gerar relatório de usuários' });
  }
};
