module.exports = function flash(req, res, next) {

  if (!req.session.flash) {
    req.session.flash = {};
    req.session.flash['success'] = [];
    req.session.flash['warning'] = [];
    req.session.flash['info'] = [];
    req.session.flash['danger'] = [];
  }


  next();
};
