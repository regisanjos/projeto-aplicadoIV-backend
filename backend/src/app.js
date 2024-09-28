require('dotenv').config(); // Carregar variáveis de ambiente do arquivo .env
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const donationRoutes = require('./routes/donationRoutes');
const needsRoutes = require('./routes/needsRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const trackingRoutes = require('./routes/trackingRoutes');
const reportRoutes = require('./routes/reportRoutes');
const errorHandler = require('./middlewares/errorHandler'); // Se houver middleware de tratamento de erro

const app = express();

// Middleware para CORS e JSON parsing
app.use(cors());
app.use(express.json());

// Rotas
app.use('/auth', authRoutes); // Rotas de autenticação
app.use('/donations', donationRoutes); // Rotas de doações
app.use('/needs', needsRoutes); // Rotas de necessidades
app.use('/notifications', notificationRoutes); // Rotas de notificações
app.use('/tracking', trackingRoutes); // Rotas de rastreamento de doações
app.use('/reports', reportRoutes); // Rotas de relatórios

// Middleware para tratamento de erros (opcional)
app.use(errorHandler);

// Escutar em uma porta definida no arquivo .env ou 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
