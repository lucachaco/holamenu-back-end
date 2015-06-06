/**
 * Order.js
 *
 * @description :: An order is what the customer submit to place an food request
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    notes: {
      type: 'string',
      required: true
    },
    status: {
      type: 'string',
      required: true
    }
  }
};

