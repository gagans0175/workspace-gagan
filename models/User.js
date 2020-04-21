const mongoose = require('mongoose');
const { Schema } = mongoose;

const SingleUser = new Schema({
  googleId: String
});

mongoose.model('users', SingleUser);
