const express = require("express");
const router = express.Router();

// @route   GET api/contacts
// @desc   Recebe todos contatos do usuario
// @access Private
router.get("/", (req, res) => {
  res.send("Recebe todos contatos");
});

// @route   POST api/contacts
// @desc   Adiciona novo contato
// @access Publico
router.post("/", (req, res) => {
  res.send("Adiciona contato");
});

// @route   PUT api/contacts
// @desc   Atualiza contatos
// @access Privado
router.put("/", (req, res) => {
  res.send("Atualiza contato");
});

// @route   DELETE api/contacts
// @desc   Deleta contatos
// @access Privado
router.delete("/", (req, res) => {
  res.send("Deleta contato");
});

module.exports = router;
