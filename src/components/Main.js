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
    this.props.actions.selectList();
  }

  render() {
    const {actions, todos} = this.props;
    return (
      <div className="index">
        <Header />
        <PanelLeft actions={actions} todos={todos} />
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
