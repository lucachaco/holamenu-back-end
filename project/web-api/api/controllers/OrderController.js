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
  },


  /**
   * `OrderController.create()`
   */
  create: function (req, res) {
    req.body.active = req.body.status === 'ACTIVE';

    Order.create(req.body).exec(function (err, order) {
      if (err) {
        return res.json(err);
      } else {

        OrderLine.create({'itemName': 'casa', 'order': order.id}).exec(function (err, order) {
          if (err) {
            return res.json(err);
          } else {
            console.log(order);
            return res.redirect('/orders')
          }
        });
      }
    });


  }


};
