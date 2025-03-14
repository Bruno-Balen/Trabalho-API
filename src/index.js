const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

//faz o require do arquivo routes.js
require('./routes')(app);

//mostra a mensagem de que o servidor está rodando
app.listen(PORT, () => {
  console.log(`Servir rodando na porta ${PORT}`);
});