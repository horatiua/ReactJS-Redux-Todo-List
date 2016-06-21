import {EDIT_TODO} from './const';

module.exports = function(id, name) {
  return {
    type: EDIT_TODO,
    id: id,
    name: name
  };
};
