const prisma = require('../config/db'); // Importando o Prisma Client do db.js

// Criar uma nova necessidade
exports.createNeed = async (req, res) => {
  const { description, quantity } = req.body;

  if (!description || !quantity) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  try {
    // Criar uma nova necessidade
    const need = await prisma.needs.create({
      data: {
        description,
        quantity,
      },
    });

    res.status(201).json({ message: 'Necessidade criada com sucesso', need });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar necessidade, tente novamente mais tarde' });
  }
};

// Obter todas as necessidades
exports.getAllNeeds = async (req, res) => {
  try {
    const needs = await prisma.needs.findMany();

    res.status(200).json(needs);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter necessidades' });
  }
};

// Obter uma necessidade específica por ID
exports.getNeedById = async (req, res) => {
  const { id } = req.params;

  try {
    const need = await prisma.needs.findUnique({
      where: { id: parseInt(id) },
    });

    if (!need) {
      return res.status(404).json({ error: 'Necessidade não encontrada' });
    }

    res.status(200).json(need);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter necessidade' });
  }
};

// Atualizar uma necessidade
exports.updateNeed = async (req, res) => {
  const { id } = req.params;
  const { description, quantity } = req.body;

  try {
    const need = await prisma.needs.update({
      where: { id: parseInt(id) },
      data: {
        description,
        quantity,
      },
    });

    res.status(200).json({ message: 'Necessidade atualizada com sucesso', need });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar necessidade' });
  }
};

// Deletar uma necessidade
exports.deleteNeed = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.needs.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ message: 'Necessidade deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar necessidade' });
  }
};
