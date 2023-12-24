const express = require('express');
const app = express();
const port = 5000;

app.get('/users', (req, res) => {
  res.send('Working');
});

// Correct the path for login controller
const loginUsers = require('./sources/login/logincontroller.js');
app.use('/login', loginUsers);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
