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
      name: '',
      description: '',
      price: '0',
      active: true
    }


    Category.find().exec(function (err, categories) {
      if (err) {
        res.send(400);
      } else {
        return res.view('item/new', {
          item: defaultItem,
          categories: categories
        })
      }
    });

  },

  /**
   * `ItemController.edit()`
   */
  edit: function (req, res) {
    var q = require('q')
    promises = [];
    promises.push(Category.find());
    promises.push(Item.findOne({id: req.param('id')}));


    q.all(promises).then(function (results) {
        console.log(results);
        return res.view('item/edit', {
          item: results[1],
          categories: results[0]
        })
      }, function (error) {
        console.log("One promise failed.");
      }
    );

    /*Category.find().exec(function (err, categories) {
     if (err) {
     res.send(400);
     } else {
     return res.view('category/table', {
     categories: categories,
     })
     }
     });*/


    /*    Item.findOne({id: req.param('id')}, function (err, item) {
     item.status = item.active ? "ACTIVE" : "INACTIVE";
     if (err) {
     return res.json(err);
     } else {
     return res.view('item/edit', {
     item: item
     categories: []
     })
     }

     });*/
  },

  /**
   * `ItemController.create()`
   */
  create: function (req, res) {
    console.log("creating");
    req.body.active = req.body.status === 'ACTIVE';
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
  },


  /**
   * `ItemController.destroy()`
   */
  destroy: function (req, res) {
    console.log("destroying");
    Item.destroy({id: req.param('id')})
      .exec(function (err) {
        return res.redirect('/items')
      });
  }


};
