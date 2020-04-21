const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
require('./models/User');
require('./services/Passport');

const keys = require('./config/keys');

const app = express();
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
mongoose.connect(keys.mongoURI);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
