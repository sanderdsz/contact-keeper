// Função que tem acesso a um request e response cycle que chega credenciais
const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  // Obtem token do header
  const token = req.header("x-auth-token");

  // Checa se não existe token
  if (!token) {
    return res.status(401).json({ msg: "Token inválido, autorização negada" });
  }
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    // Autoriza usários nas rotas
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token inválido" });
  }
};
