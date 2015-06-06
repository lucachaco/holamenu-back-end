/**
 * Category.js
 *
 * @description :: The type of item
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true
    }
  }
};

