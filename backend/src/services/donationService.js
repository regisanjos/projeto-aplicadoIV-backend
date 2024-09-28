const donationService = require('../services/donationService');

// Criar uma nova doação
exports.createDonation = async (req, res) => {
  try {
    const donation = await donationService.createDonation({
      ...req.body,
      userId: req.user.id, // Associa a doação ao usuário logado
    });
    res.status(201).json({ message: 'Doação criada com sucesso', donation });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obter todas as doações
exports.getAllDonations = async (req, res) => {
  try {
    const donations = await donationService.getAllDonations();
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter doações' });
  }
};

// Obter uma doação específica
exports.getDonationById = async (req, res) => {
  try {
    const donation = await donationService.getDonationById(req.params.id);
    res.status(200).json(donation);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Atualizar uma doação
exports.updateDonation = async (req, res) => {
  try {
    const donation = await donationService.updateDonation(req.params.id, req.body);
    res.status(200).json({ message: 'Doação atualizada com sucesso', donation });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Deletar uma doação
exports.deleteDonation = async (req, res) => {
  try {
    await donationService.deleteDonation(req.params.id);
    res.status(200).json({ message: 'Doação deletada com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
