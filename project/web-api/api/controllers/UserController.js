/**
 * UserController
 *
 * @description :: Server-side logic for managing Consultants
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  /**
   * `UserController.login()`
   */
  login: function (req, res) {
    return res.view({
      layout: "basic_layout"
    });
  },

  /**
   * `UserController.signUp()`
   */
  signUp: function (req, res) {
    return res.view({
      layout: "basic_layout"
    });
  },

  /**
   * `UserController.resetPassword()`
   */
  resetPassword: function (req, res) {
    return res.view({
      layout: "basic_layout"
    });
  },

  /**
   * `UserController.loginCheck()`
   */
  loginCheck: function (req, res) {

    User.findOne({email: req.param('email'), password: req.param('password')}, function (err, user) {
      console.log('User: ' + user);

      if (user) {
        req.session.authenticated = true;
        return res.redirect('/admin/')
      } else {
        req.session.flash['danger'].push('Sorry, your email or password is incorrect. ');
        return res.redirect('/admin/login')
      }

    });


  },

  /**
   * `UserController.logout()`
   */
  logout: function (req, res) {
    req.session.authenticated = false;
    return res.redirect('/admin/login')
  }

};

