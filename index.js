const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
require('./models/User');
require('./services/Passport');

const keys = require('./config/keys');

const app = express();
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// https://mighty-waters-98427.herokuapp.com/
// https://git.heroku.com/mighty-waters-98427.git
require('./routes/authRoutes')(app);
require('./routes/paymentRoutes')(app);
mongoose.connect(keys.mongoURI);

if (process.env.NODE_EN === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Server started at ${port}`));
