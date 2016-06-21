import {LIST_MODAL} from './const';

module.exports = function(list) {
  return {
    type: LIST_MODAL,
    list: list
  };
};
