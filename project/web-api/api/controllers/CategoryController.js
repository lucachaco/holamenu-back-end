/**
 * ClientController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {


  /**
   * `CategoryController.table()`
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
  },

  /**
   * `CategoryController.new()`
   */
  new: function (req, res) {


    var defaultCategory = {
      name: '',
      description: ''
    }
    return res.view('category/new', {
      category: defaultCategory
    })
  },

  /**
   * `CategoryController.edit()`
   */
  edit: function (req, res) {


    Category.findOne({id: req.param('id')}, function (err, category) {
      if (err) {
        return res.json(err);
      } else {
        return res.view('category/edit', {
          category: category
        })
      }

    });
  },

  /**
   * `CategoryController.create()`
   */
  create: function (req, res) {
    Category.create(req.body).exec(function (err, result) {
      if (err) {
        return res.json(err);
      } else {
        return res.redirect('/categories')
      }
    });
  },

  /**
   * `CategoryController.update()`
   */
  update: function (req, res) {
    Category.update({id: req.param('id')}, {
      name: req.param('name'),
      description: req.param('description')
    }).exec(function (err, result) {
      if (err) {
        return res.json(err);
      } else {
        return res.redirect('/categories')
      }
    });
  },


  /**
   * `CategoryController.destroy()`
   */
  destroy: function (req, res) {
    Category.destroy({id: req.param('id')})
      .exec(function (err) {
        return res.redirect('/categories')
      });
  }




};
