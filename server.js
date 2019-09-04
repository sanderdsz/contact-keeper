const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hello World"));

// Objeto procura PORTA do ambiente
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor iniciou na porta ${PORT}`));
