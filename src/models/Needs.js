const prisma = require('../config/db'); // Importando o Prisma Client do db.js

// Função para criar uma nova necessidade
exports.create = async (data) => {
  return await prisma.needs.create({
    data,
  });
};

// Função para encontrar todas as necessidades
exports.findAll = async () => {
  return await prisma.needs.findMany();
};

// Função para encontrar uma necessidade específica pelo ID
exports.findById = async (id) => {
  return await prisma.needs.findUnique({
    where: { id: parseInt(id) },
  });
};

// Função para atualizar uma necessidade pelo ID
exports.update = async (id, data) => {
  return await prisma.needs.update({
    where: { id: parseInt(id) },
    data,
  });
};

// Função para deletar uma necessidade pelo ID
exports.delete = async (id) => {
  return await prisma.needs.delete({
    where: { id: parseInt(id) },
  });
};
