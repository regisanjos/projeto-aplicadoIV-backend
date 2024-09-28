// Middleware de tratamento de erros
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
      message: err.message,
      // Inclui o stack trace apenas em ambiente de desenvolvimento
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
  };
  
  module.exports = errorHandler;
  