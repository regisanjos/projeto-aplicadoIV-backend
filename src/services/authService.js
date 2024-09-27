const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user');

// Função para registrar um novo usuário
exports.registerUser = async (userData) => {
  const { name, email, password, role } = userData;

  // Verificar se o usuário já existe pelo email
  const existingUser = await userModel.findByEmail(email);
  if (existingUser) {
    throw new Error('Email já cadastrado');
  }

  // Criptografar a senha
  const hashedPassword = await bcrypt.hash(password, 10);

  // Criar um novo usuário
  return await userModel.create({
    name,
    email,
    password: hashedPassword,
    role,
  });
};

// Função para login de usuário
exports.loginUser = async (email, password) => {
  // Verificar se o usuário existe
  const user = await userModel.findByEmail(email);
  if (!user) {
    throw new Error('Email ou senha incorretos');
  }

  // Verificar se a senha está correta
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Email ou senha incorretos');
  }

  // Gerar token JWT
  const token = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1d' } // Token expira em 1 dia
  );

  return { token, user };
};

// Função para verificar token JWT
exports.verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error('Token inválido ou expirado');
  }
};
