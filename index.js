const express = require('express');
const app = express();

app.use('/auth/google', (req, res) => {
  res.send('Google Auth flow');
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
