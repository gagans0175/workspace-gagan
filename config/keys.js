if (process.env.NODE_ENV === 'production') {
  console.log('process.env.NODE_ENV', process.env.NODE_ENV);
  // we are in production - return the prod set of keys
  module.exports = require('./prod');
} else {
  // we are in development - return the dev keys!!!
  module.exports = require('./dev');
}
