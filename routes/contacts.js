const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Contact = require("../models/Contact");

/**
 * @route  GET api/contacts
 * @desc   Recebe todos contatos do usuario
 * @access Private
 */
router.get("/", auth, async (req, res) => {
  // Try-catch necessário para mongoose
  try {
    /*
     * Recebe contato do usuário especifico => req.user.id
     * Sort por datas => -1 significa o contato mais recente
     */
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.menssage);
    res.status(500).send("Erro no servidor");
  }
});

/**
 * @route  POST api/contacts
 * @desc   Adiciona novo contato
 * @access Publico
 */
router.post("/", (req, res) => {
  res.send("Adiciona contato");
});

/**
 * @route   PUT api/contacts
 * @desc   Atualiza contatos
 * @access Privado
 */
router.put("/", (req, res) => {
  res.send("Atualiza contato");
});

/**
 * @route   DELETE api/contacts
 * @desc   Deleta contatos
 * @access Privado
 */
router.delete("/", (req, res) => {
  res.send("Deleta contato");
});

module.exports = router;
