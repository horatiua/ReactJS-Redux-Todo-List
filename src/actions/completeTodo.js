import {COMPLETE_TODO} from './const';

module.exports = function(id) {
  return {
    type: COMPLETE_TODO,
    id: id
  };
};
