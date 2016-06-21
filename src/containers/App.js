/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    const {actions, todos} = this.props;
    return <Main actions={actions} todos={todos}/>;
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.object.isRequired,
  todos: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const props = { todos: state.todos };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    addTodo: require('../actions/addTodo.js'),
    addList: require('../actions/addList.js'),
    deleteTodo: require('../actions/deleteTodo.js'),
    deleteList: require('../actions/deleteList.js'),
    editTodo: require('../actions/editTodo.js'),
    editList: require('../actions/editList.js'),
    completeTodo: require('../actions/completeTodo.js'),
    selectList: require('../actions/selectList.js'),
    listModal: require('../actions/listModal.js')
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
