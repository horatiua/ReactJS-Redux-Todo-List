import { SELECT_LIST, LIST_MODAL, ADD_TODO, ADD_LIST, EDIT_TODO, EDIT_LIST, DELETE_TODO, DELETE_LIST, COMPLETE_TODO } from '../actions/const';
import todo from './todo';
import list from './list';

/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
const initialState = {
  activeList: {},
  listModal: null,
  lists: [
    {
      id: 1,
      name: 'Groceries',
      items: [
        {
          id: 1,
          name: 'Cheese',
          done: false
        }, {
          id: 2,
          name: 'Eggs',
          done: false
        }, {
          id: 3,
          name: 'Carrots',
          done: true
        }, {
          id: 4,
          name: 'Tomatos',
          done: false
        }
      ]
    }, {
      id: 2,
      name: 'Weekend trip to mountains',
      items: [
        {
          id: 1,
          name: 'Sunglasses',
          done: true
        }, {
          id: 2,
          name: 'Food',
          done: true
        }, {
          id: 3,
          name: 'Water',
          done: true
        }, {
          id: 4,
          name: 'Tent',
          done: true
        }
      ]
    }, {
      id: 3,
      name: 'Christmas presents',
      items: []
    }
  ]
};

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {
    /*
    case 'YOUR_ACTION': {
      // Modify next state depending on the action and return it
      return nextState;
    } break;
    */

    case SELECT_LIST: {
      let activeList = list(
        state.activeList,
        Object.assign({}, action, {
          lists: state.lists
        }));

      return Object.assign({}, state, {
        activeList: activeList,
        lists: state.lists
      });
    }

    case LIST_MODAL: {
      return Object.assign({}, state, {
        listModal: action.list
      });
    }

    case ADD_LIST: {
      let newList = {
        id: state.lists.reduce((maxId, list) => Math.max(maxId, list.id), 0) + 1,
        name: action.name,
        items: []
      };

      let lists = [
        ...state.lists,
        newList
      ];

      let activeList = list(
        state.activeList,
        Object.assign({}, action, {
          id: newList.id,
          lists: lists
      }));

      return Object.assign({}, state, {
        activeList: activeList,
        listModal: null,
        lists: lists
      });
    }

    case EDIT_LIST: {
      let lists = state.lists.map((list) => {
        if (list.id == action.id) {
          return Object.assign({}, list, {
            name: action.name,
            items: list.items.map((item) => {
              return item;
            })
          });
        } else {
          return list;
        }
      });

      let activeList = list(
        state.activeList,
        Object.assign({}, action, {
          lists: lists
        }));

      return Object.assign({}, state, {
        activeList: activeList,
        lists: lists,
        listModal: null,
      });
    }

    case DELETE_LIST: {
      let lists = state.lists.filter((list) => {
        return list.id != action.id;
      });

      let activeList = list(
        state.activeList,
        Object.assign({}, action, {
          lists: lists
        }));

      return Object.assign({}, state, {
        activeList: activeList,
        lists: lists
      });
    }

    case ADD_TODO: {
      action.id = state.activeList.items.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1;

      let activeList  = Object.assign({}, state.activeList, {
        items: [
          ...state.activeList.items,
          todo(undefined, action)
        ]
      });

      let lists = state.lists.map((list) => {
        if (list.id == activeList.id) {
          return activeList;
        } else {
          return list;
        }
      });

      return Object.assign({}, state, {
        activeList: activeList,
        lists: lists
      });
    }

    case COMPLETE_TODO:
    case EDIT_TODO: {
      let activeList  = Object.assign({}, state.activeList, {
        items: state.activeList.items.map((item) => {
          return todo(item, action);
        })
      });

      let lists = state.lists.map((list) => {
        if (list.id == activeList.id) {
          return activeList;
        } else {
          return list;
        }
      });

      return Object.assign({}, state, {
        activeList: activeList,
        lists: lists
      });
    }

    case DELETE_TODO: {
      let activeList  = Object.assign({}, state.activeList, {
        items: state.activeList.items.filter((item) => {
          return item.id != action.id;
        })
      });

      let lists = state.lists.map((list) => {
        if (list.id == activeList.id) {
          return activeList;
        } else {
          return list;
        }
      });

      return Object.assign({}, state, {
        activeList: activeList,
        lists: lists
      });
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
