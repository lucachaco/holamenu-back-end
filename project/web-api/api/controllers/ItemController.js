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

    Item.find().exec(function (err, items) {
      if (err) {
        res.send(400);
      } else {
        return res.view('item/table', {
          items: items,
          myvar: 'hello???',
          title: 'Yeap'
        })
      }
    });
  },

  /**
   * `ItemController.new()`
   */
  new: function (req, res) {


    var defaultItem = {
      name: 'default nombre',
      description: 'default last name',
      price: '0',
      status: 'INACTIVE'

    }
    return res.view('item/new', {
      item: defaultItem
    })
  }






};
