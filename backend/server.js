const app = require('./src/app'); // Importa a configuração do app.js

// Definir a porta do servidor
const PORT = process.env.PORT || 3000;

// Iniciar o servi
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
