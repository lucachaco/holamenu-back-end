/**
 * UserController
 *
 * @description :: Server-side logic for managing Consultants
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    /**
     * `CompanyController.edit()`
     */
    edit: function (req, res) {


        Restaurant.findOne({id: req.param('id')}, function (err, restaurant) {
            console.log(restaurant);
            if (err) {
                return res.json(err);
            } else {
                restaurant = {
                    id: 1,
                    name: 'casa',
                    description: 'sol'
                };
                return res.view('restaurant/edit', {
                    restaurant: restaurant
                })
            }

        });
    },
    users: function (req, res) {


        return res.view('restaurant/users', {
            users: {}
        })

    }
};

