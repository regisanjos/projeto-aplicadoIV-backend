const notificationService = require('../services/notificationService'); // Certifique-se de que o caminho está correto
const { sendEmail } = require('../utils/sendEmail');

// Função para criar uma nova notificação
exports.createNotification = async (req, res) => {
  try {
    // Criação da notificação usando o service
    const notification = await notificationService.createNotification({
      message: req.body.message,
      userId: req.body.userId,
    });

    // Enviar um email para o usuário com a notificação
    await sendEmail({
      to: req.body.userEmail,  // Email do usuário destinatário
      subject: 'Nova Notificação',
      text: `Você tem uma nova notificação: ${req.body.message}`,
      html: `<p>${req.body.message}</p>`, // Conteúdo HTML da mensagem (opcional)
    });

    // Responder que a notificação foi criada e o email enviado
    res.status(201).json({ message: 'Notificação criada e email enviado com sucesso', notification });
  } catch (error) {
    // Captura qualquer erro e envia a resposta com a mensagem do erro
    res.status(400).json({ error: error.message });
  }
};

// Função para obter as notificações de um usuário específico
exports.getNotificationsByUserId = async (req, res) => {
  try {
    const notifications = await notificationService.getNotificationsByUserId(req.params.userId);
    res.status(200).json(notifications);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Função para deletar uma notificação
exports.deleteNotification = async (req, res) => {
  try {
    await notificationService.deleteNotification(req.params.id);
    res.status(200).json({ message: 'Notificação deletada com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
