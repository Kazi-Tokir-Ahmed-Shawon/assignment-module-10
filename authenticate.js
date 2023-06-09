const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, 'Toukir_Shawon', (error, decoded) => {
    if (error) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    req.userId = decoded.userId;
    next();
  });
}

module.exports = authenticate;
