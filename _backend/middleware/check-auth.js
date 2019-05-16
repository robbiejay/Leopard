const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, 'my_very_sneaky_passphrase');
    next();
  } catch (error) {
      res.status(401).json({ message: "Auth failed!"});
  }
};
