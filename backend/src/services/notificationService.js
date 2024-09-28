const notificationModel = require('../models/Notification');

// Função para criar uma nova notificação
exports.createNotification = async (notificationData) => {
  return await notificationModel.create(notificationData);
};

// Função para encontrar todas as notificações de um usuário específico
exports.getNotificationsByUserId = async (userId) => {
  const notifications = await notificationModel.findByUserId(userId);

  if (!notifications || notifications.length === 0) {
    throw new Error('Nenhuma notificação encontrada para este usuário');
  }

  return notifications;
};

// Função para deletar uma notificação pelo ID
exports.deleteNotification = async (id) => {
  const notification = await notificationModel.delete(id);

  if (!notification) {
    throw new Error('Erro ao deletar a notificação');
  }

  return notification;
};
