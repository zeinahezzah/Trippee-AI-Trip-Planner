// const jwt = require('jsonwebtoken');

// const authenticateToken = (req, res, next) => {
//     const token = req.header('Authorization');
//     if (!token) {
//       return res.status(401).json({ error: 'Unauthorized' });
//     }
    
//     jwt.verify(token, process.env.secretKey, (error, user) => {
//       if (error) {
//         return res.status(403).json({ error: 'Forbidden' });
//       }
//       req.user = user;
//       next();
//     });
//   };

//   module.exports = authenticateToken;