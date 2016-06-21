import {ADD_TODO} from './const';

module.exports = function(name) {
  return {
    type: ADD_TODO,
    name: name
  };
};
