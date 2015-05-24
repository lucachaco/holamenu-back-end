/**
 * ClientController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {


  /**
   * `ClientController.table()`
   */
  table: function (req, res) {

    Client.find().exec(function (err, clients) {
      if (err) {
        res.send(400);
      } else {
        return res.view('client/table', {
          clients: clients,
          myvar: 'hello???',
          title: 'Yeap'
        })
      }
    });
  },


  /**
   * `ClientController.create()`
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
   * `ClientController.edit()`
   */
  edit: function (req, res) {

    var defaultClient = {
      firstName: 'default nombre',
      lastName: 'default last name'

    }

    Client.findOne({id: req.param('id')}, function (err, client) {

      if (err) {
        //return res.redirect('/clients')
        return res.json(err);
      } else {
        return res.view('client/edit', {
          client: client
        })
      }

    });
  },

  /**
   * `ClientController.new()`
   */
  new: function (req, res) {


    var defaultClient = {
      firstName: 'default nombre',
      lastName: 'default last name'

    }
    return res.view('client/new', {
      client: defaultClient
    })
  },


  /**
   * `ClientController.update()`
   */
  update: function (req, res) {
    Client.update({id: req.param('id')}, {
      firstName: req.param('firstName'),
      lastName: req.param('lastName')
    }).exec(function (err, result) {
      if (err) {
      } else {
        //req.session.flash['success'].push('Updated successfully');
        return res.redirect('/clients')
      }
    });
  }




};
