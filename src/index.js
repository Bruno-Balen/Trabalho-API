const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

require('./routes')(app);

//mostra a mensagem de que o servidor está rodando
app.listen(PORT, () => {
  console.log(`Servir rodando na porta ${PORT}`);
});