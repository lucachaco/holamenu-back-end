/**
 * OrderLine.js
 *
 * @description :: An order line is the details of an order
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    itemName: {
      type: 'string',
      required: true
    },
    order:{
      columnName: 'order_id',
      model:'order'
    }
  }
};

