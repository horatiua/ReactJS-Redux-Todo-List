require('bootstrap');
require('normalize.css/normalize.css');
require('bootstrap/dist/css/bootstrap.min.css');
require('styles/App.less');

import React, { PropTypes } from 'react';
import Header from './Header';
import PanelLeft from './PanelLeftComponent';
import PanelRight from './PanelRightComponent';
import ModalAddList from './ModalAddListComponent';

class AppComponent extends React.Component {
  componentDidMount() {
    const { actions, params } = this.props;

    actions.selectList(params ? params.listId : null);
  }

  componentWillReceiveProps(nextProps) {
    const { params, router } = this.props,
          listId = nextProps.todos.activeList.id;

    let path = '';

    if(listId) {
      if (listId != params.listId) {
        path = '/list/' + listId;
      }
    } else {
      if(params.listId) {
        path = '/';
      }
    }

    if(path.length) {
      router.push(path);
    }
  }

  render() {
    const {actions, todos, params} = this.props;

    return (
      <div className="index">
        <Header />
        <PanelLeft actions={actions} todos={todos} params={params} />
        <PanelRight actions={actions} todos={todos} />
        <ModalAddList actions={actions} todos={todos} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
  actions: PropTypes.object.isRequired,
  todos: PropTypes.object.isRequired
};

export default AppComponent;
