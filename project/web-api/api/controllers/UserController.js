/**
 * UserController
 *
 * @description :: Server-side logic for managing Consultants
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  /**
   * `UserController.register()`
   */
  register: function (req, res) {
    req.body.username=req.body.email;
    req.body.emailVerified=false;
    User.create(req.body).exec(function (err, result) {
      if (err) {
        return res.json(err);
      } else {
        return res.redirect('/categories')
      }
    });
  },

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

