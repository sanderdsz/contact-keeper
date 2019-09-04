const express = require("express");

const app = express();

app.get("/", (req, res) =>
  res.json({ msg: "Bem vindo à API do ContactKeeper" })
);

// Definir as rotas do app
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));

// Objeto procura PORTA do ambiente
const PORT = process.env.PORT || 5000;

// npm run server => Para iniciar o servidor
app.listen(PORT, () => console.log(`Servidor iniciou na porta ${PORT}`));
