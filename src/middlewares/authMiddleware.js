const jwt = require('jsonwebtoken');
const prisma = require('../config/db'); // Importando o Prisma Client do db.js

// Middleware para verificar a autenticação
exports.protect = async (req, res, next) => {
  // Verificar se o token JWT está presente no cabeçalho da requisição
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Acesso negado, token não fornecido' });
  }

  try {
    // Verificar e decodificar o token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Buscar o usuário com base no ID do token
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    // Armazenar o usuário na requisição para acesso posterior nas rotas
    req.user = user;
    next(); // Passar para o próximo middleware ou controller
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido ou expirado' });
  }
};

// Middleware para verificar se o usuário tem permissão de administrador (caso seja necessário)
exports.adminOnly = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Acesso negado, permissão insuficiente' });
  }
  next();
};
