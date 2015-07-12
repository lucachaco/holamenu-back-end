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
    req.session.authenticated = true;
    console.log(req.param('username'));
    return res.redirect('/')
  },

  /**
   * `UserController.logout()`
   */
  logout: function (req, res) {
    req.session.authenticated = false;
    return res.redirect('/login')
  }

};

