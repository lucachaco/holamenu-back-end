/**
 * ClientController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {


  /**
   * `ItemController.table()`
   */
  table: function (req, res) {

    Category.find().exec(function (err, categories) {
      if (err) {
        res.send(400);
      } else {
        return res.view('category/table', {
          categories: categories,
          title: 'Yeap'
        })
      }
    });
  }


};
