const express = require("express");
const router = express.Router();

// @route   GET api/auth
// @desc   Recebe usuario logado
// @access Private
router.get("/", (req, res) => {
  res.send("Recebe usuario logado");
});

// @route   POST api/auth
// @desc   Autentica usuario & recebe token
// @access Publico
router.post("/", (req, res) => {
  res.send("Loga um usuario");
});

module.exports = router;
