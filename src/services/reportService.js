const reportService = require('../services/reportService');

// Relatório de doações por status
exports.getDonationReport = async (req, res) => {
  try {
    const report = await reportService.getDonationReport();
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao gerar relatório de doações' });
  }
};

// Relatório de doações de um usuário específico
exports.getUserDonationReport = async (req, res) => {
  try {
    const report = await reportService.getUserDonationReport(req.params.userId);
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao gerar relatório de doações para o usuário' });
  }
};

// Relatório de necessidades
exports.getNeedsReport = async (req, res) => {
  try {
    const report = await reportService.getNeedsReport();
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao gerar relatório de necessidades' });
  }
};

// Relatório de usuários por tipo (doador ou recebedor)
exports.getUserReport = async (req, res) => {
  try {
    const report = await reportService.getUserReport();
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao gerar relatório de usuários' });
  }
};
