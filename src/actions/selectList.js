import {SELECT_LIST} from './const';

module.exports = function(id) {
  return {
    type: SELECT_LIST,
    id: id
  };
};
