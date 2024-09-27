const prisma = require('../config/db'); // Importando o Prisma Client do db.js

// Função para criar um novo usuário
exports.create = async (data) => {
  return await prisma.user.create({
    data,
  });
};

// Função para encontrar um usuário pelo email (utilizado no login)
exports.findByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: { email },
  });
};

// Função para encontrar um usuário pelo ID
exports.findById = async (id) => {
  return await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });
};

// Função para obter todos os usuários
exports.findAll = async () => {
  return await prisma.user.findMany();
};

// Função para atualizar um usuário pelo ID
exports.update = async (id, data) => {
  return await prisma.user.update({
    where: { id: parseInt(id) },
    data,
  });
};

// Função para deletar um usuário pelo ID
exports.delete = async (id) => {
  return await prisma.user.delete({
    where: { id: parseInt(id) },
  });
};
