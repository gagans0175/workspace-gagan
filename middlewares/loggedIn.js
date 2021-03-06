module.exports = (request, response, next) => {
  if (!request.user) {
    return response.status(401).send({ error: 'User must be signed in to add credits to account.' });
  }
  next();
};
