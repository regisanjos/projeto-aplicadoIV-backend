const prisma = require('../config/db'); // Importando o Prisma Client do db.js

// Função para criar uma nova notificação
exports.create = async (data) => {
  return await prisma.notification.create({
    data,
  });
};

// Função para encontrar todas as notificações de um usuário específico
exports.findByUserId = async (userId) => {
  return await prisma.notification.findMany({
    where: { userId: parseInt(userId) },
  });
};

// Função para encontrar uma notificação específica pelo ID
exports.findById = async (id) => {
  return await prisma.notification.findUnique({
    where: { id: parseInt(id) },
  });
};

// Função para deletar uma notificação pelo ID
exports.delete = async (id) => {
  return await prisma.notification.delete({
    where: { id: parseInt(id) },
  });
};
