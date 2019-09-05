const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const auth = require("../middleware/auth");

// @route   GET api/auth
// @desc   Recebe usuario logado
// @access Private
router.get("/", auth, async (req, res) => {
  try {
    // Recebe usuário da DB
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).status("Erro no servidor");
  }
});

// @route   POST api/auth
// @desc   Autentica usuario & recebe token
// @access Publico
// Validação para ver email
router.post(
  "/",
  [
    check("email", "Por favor insira um email válido").isEmail(),
    check("password", "Insira um password").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      // Ver se usuário já existe
      let user = await User.findOne({ email });
      // Se não há usuário retorna erro de credenciais
      if (!user) {
        return res.status(400).json({ msg: "Credenciais inválidas" });
      }
      // Se há usuário continua verificando password
      const isMatch = await bcrypt.compare(password, user.password);

      // True ou False se o password da math com hash
      if (!isMatch) {
        return res.status(400).json({ msg: "Credenciais inválidas" });
      }

      // Envia token se está certo
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
