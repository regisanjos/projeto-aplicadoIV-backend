const prisma = require('../config/db'); // Importando o Prisma Client do db.js

// Função para criar um novo registro de rastreamento
exports.create = async (data) => {
  return await prisma.tracking.create({
    data,
  });
};

// Função para encontrar todos os registros de rastreamento de uma doação específica
exports.findByDonationId = async (donationId) => {
  return await prisma.tracking.findMany({
    where: { donationId: parseInt(donationId) },
    orderBy: { createdAt: 'asc' }, // Ordena pelo tempo de criação
  });
};

// Função para encontrar um registro de rastreamento específico pelo ID
exports.findById = async (id) => {
  return await prisma.tracking.findUnique({
    where: { id: parseInt(id) },
  });
};

// Função para atualizar um registro de rastreamento pelo ID
exports.update = async (id, data) => {
  return await prisma.tracking.update({
    where: { id: parseInt(id) },
    data,
  });
};

// Função para deletar um registro de rastreamento pelo ID
exports.delete = async (id) => {
  return await prisma.tracking.delete({
    where: { id: parseInt(id) },
  });
};
