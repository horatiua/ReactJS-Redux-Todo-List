import {ADD_LIST} from './const';

module.exports = function(name) {
  return {
    type: ADD_LIST,
    name: name
  };
};
