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
router.post(
  "/",
  [
    auth,
    [
      // Validação
      check("name", "Um nome é necessário")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Pega informações do body
    const { name, email, phone, type } = req.body;
    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        // Pega do req.user
        user: req.user.id
      });
      // Coloca na DB
      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.error(er.menssage);
      res.status(500).send("Erro no servidor");
    }
  }
);

/**
 * @route   PUT api/contacts
 * @desc   Atualiza contatos
 * @access Privado
 */
router.put("/:id", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { name, email, phone, type } = req.body;

  // Build contact object
  const contactFields = {};
  if (name) contactFields.name = name;
  if (email) contactFields.email = email;
  if (phone) contactFields.phone = phone;
  if (type) contactFields.type = type;
  // Tenta salvar o que captura
  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ msg: "Contact not found" });
    /**
     * ! Função que verificar se o usuário tem o contato
     * * usa toString para transformar em string
     */
    // Make sure user owns contact
    if (contact.user.toString() !== req.user.id)
      return res.status(401).json({ msg: "Not authorized" });

    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactFields },
      // Se o contato não existe, cria-se
      { new: true }
    );

    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

/**
 * @route   DELETE api/contacts
 * @desc   Deleta contatos
 * @access Privado
 */
router.delete("/:id", auth, async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ msg: "Contact not found" });

    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }
    await Contact.findByIdAndRemove(req.params.id);

    res.json({ msg: "Contato removido" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
