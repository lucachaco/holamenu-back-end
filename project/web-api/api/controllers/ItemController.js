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
      active: true
    }
    return res.view('item/new', {
      item: defaultItem
    })
  },

  /**
   * `ItemController.edit()`
   */
  edit: function (req, res) {


    Item.findOne({id: req.param('id')}, function (err, item) {
      item.status = item.active ? "ACTIVE" : "INACTIVE";
      if (err) {
        return res.json(err);
      } else {
        return res.view('item/edit', {
          item: item
        })
      }

    });
  },

  /**
   * `ItemController.create()`
   */
  create: function (req, res) {
    Item.create(req.body).exec(function (err, result) {
      if (err) {
        return res.json(err);
      } else {
        return res.redirect('/items')
      }
    });
  },

  /**
   * `ItemController.update()`
   */
  update: function (req, res) {
    Item.update({id: req.param('id')}, {
      name: req.param('name'),
      description: req.param('description'),
      price: req.param('price'),
      active: req.param('status') === 'ACTIVE'
    }).exec(function (err, result) {
      if (err) {
        return res.json(err);
      } else {
        return res.redirect('/items')
      }
    });
  }


};
