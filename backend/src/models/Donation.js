const prisma = require('../config/db'); // Importando o Prisma Client do db.js

// Função para criar uma nova doação
exports.create = async (data) => {
  return await prisma.donation.create({
    data,
  });
};

// Função para encontrar todas as doações
exports.findAll = async () => {
  return await prisma.donation.findMany({
    include: {
      user: true, // Inclui os detalhes do usuário que fez a doação
    },
  });
};

// Função para encontrar uma doação específica pelo ID
exports.findById = async (id) => {
  return await prisma.donation.findUnique({
    where: { id: parseInt(id) },
    include: {
      user: true, // Inclui os detalhes do usuário que fez a doação
    },
  });
};

// Função para atualizar uma doação pelo ID
exports.update = async (id, data) => {
  return await prisma.donation.update({
    where: { id: parseInt(id) },
    data,
  });
};

// Função para deletar uma doação pelo ID
exports.delete = async (id) => {
  return await prisma.donation.delete({
    where: { id: parseInt(id) },
  });
};
