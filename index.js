const express = require('express');
const app = express();
// https://mighty-waters-98427.herokuapp.com/
// https://git.heroku.com/mighty-waters-98427.git
app.use('/auth/google', (req, res) => {
  res.send('Google Auth flow');
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
