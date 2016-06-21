import {EDIT_LIST} from './const';

module.exports = function(name, id) {
  return {
    type: EDIT_LIST,
    name: name,
    id: id
  };
};
