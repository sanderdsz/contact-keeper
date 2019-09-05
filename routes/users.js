const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
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
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Captura dados
    const { name, email, password } = req.body;
    try {
      // Verificar usuário com email repetido
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "Usuário já existente" });
      }
      user = new User({
        name,
        email,
        password
      });

      //Encripta password => método
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();
      //JWT
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          // Tempo para expirar sessão
          expiresIn: 360000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Erro no servidor");
    }
  }
);

module.exports = router;
