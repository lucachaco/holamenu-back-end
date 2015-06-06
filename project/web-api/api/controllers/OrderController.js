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

    Order.find().exec(function (err, orders) {
      if (err) {
        res.send(400);
      } else {
        return res.view('order/table', {
          orders: orders,
          title: 'Yeap'
        })
      }
    });
  }



};
