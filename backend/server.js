const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());
app.get('/users', (req, res) => {
  res.send('Working');
});

// Correct the path for login controller
const loginUsers = require('./sources/login/logincontroller.js');

const authRoutes = require('./sources/routes/auth.js')
app.use('/login', loginUsers);
app.use('/auth', authRoutes);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
