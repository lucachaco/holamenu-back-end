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

    Order.find().populate('orderLines').exec(function (err, orders) {
      if (err) {
        res.send(400);
      } else {

        console.log(orders);
        return res.view('order/table', {
          orders: orders,
          title: 'Yeap'
        })
      }
    });
  },


  /**
   * `OrderController.create()`
   */
  create: function (req, res) {
    Order.create(req.body).exec(function (err, order) {
      if (err) {
        return res.json(err);
      } else {
        console.log(order);
        return res.redirect('/orders')
      }
    });

  }


};
