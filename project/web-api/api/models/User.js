/**
 * User.js
 *
 * @description :: User of the system
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    username: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: false
    },
    password: {
      type: 'string',
      required: false
    },
    emailVerified: {
      type: 'string',
      required: false
    }
  }
};

