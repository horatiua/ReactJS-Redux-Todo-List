import { SELECT_LIST, ADD_LIST, EDIT_LIST, DELETE_LIST } from '../actions/const';

const list = (state, action) => {
  switch (action.type) {
    case SELECT_LIST:
    case ADD_LIST:
    case EDIT_LIST: {
      for (let i in action.lists) {
        if (action.lists[i].id == action.id || (action.type == SELECT_LIST && !action.id)) {
          return Object.assign({}, action.lists[i], {
            items: action.lists[i].items.map((item) => {
              return item;
            })
          });
        }
      }
    }

    case DELETE_LIST: {
      if(action.lists.length) {
        return Object.assign({}, action.lists[0]);
      } else {
        return {};
      }
    }

    default: {
      return state;
    }
  }
};

export default list;
