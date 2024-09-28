const express = require('express');
const notificationController = require('../controllers/notificationController'); // Certifique-se de que o caminho está correto
const authMiddleware = require('../middlewares/authMiddleware'); // Importa o middleware de autenticação

const router = express.Router();

// Definir as rotas de notificação
router.post('/', authMiddleware.protect, notificationController.createNotification);
router.get('/user/:userId', authMiddleware.protect, notificationController.getNotificationsByUserId);
router.delete('/:id', authMiddleware.protect, notificationController.deleteNotification);

module.exports = router;
