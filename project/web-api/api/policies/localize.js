// api/policies/localize.js
module.exports = function(req, res, next) {
  req.setLocale("es");
  next();
};
