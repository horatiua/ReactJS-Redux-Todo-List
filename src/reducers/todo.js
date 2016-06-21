import { ADD_TODO, EDIT_TODO, COMPLETE_TODO } from '../actions/const';

const todo = (state, action) => {
  switch(action.type) {
    case ADD_TODO: {
      return {
        //id: list.items.reduce((maxId, item) => Math.max(maxId, item.id), -1) + 1,
        id: action.id,
        name: action.name,
        done: false
      };
    }

    case EDIT_TODO: {
      if (state.id == action.id) {
        return Object.assign({}, state, {
          name: action.name
        });
      } else {
        return state;
      }
    }

    case COMPLETE_TODO: {
      if (state.id == action.id) {
        return Object.assign({}, state, {
          done: !state.done
        });
      } else {
        return state;
      }
    }

    default: {
      return state;
    }
  }
}

export default todo;
