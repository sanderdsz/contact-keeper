const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

// @route   POST api/users
// @desc   Registra um usuario
// @access Public
router.post(
  "/",
  [
    check("name", "Adicione um nome")
      .not()
      .isEmpty(),
    check("email", "Por favor inclua um e-mail válido").isEmail(),
    check("password", "Entre com um password de 6 ou mais caracteres").isLength(
      { min: 6 }
    )
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("Passou!");
  }
);

module.exports = router;
