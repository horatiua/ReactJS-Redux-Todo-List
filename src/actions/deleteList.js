import {DELETE_LIST} from './const';

module.exports = function(id) {
  return {
    type: DELETE_LIST,
    id: id
  };
};
