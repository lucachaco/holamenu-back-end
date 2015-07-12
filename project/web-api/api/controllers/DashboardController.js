/**
 * ClientController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {


  /**
   * `DashboardController.table()`
   */
  home: function (req, res) {


    return res.view('dashboard/home', {
      title: 'Yeap'
    });
  }


};
