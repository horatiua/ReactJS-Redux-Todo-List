import {DELETE_TODO} from './const';

module.exports = function(id) {
  return {
    type: DELETE_TODO,
    id: id
  };
};
