'use strict';

import React, { PropTypes } from 'react';
import PanelLeftItem from './PanelLeftItemComponent';

class PanelLeftComponent extends React.Component {
  getItems() {
    const { todos, actions } = this.props;

    if(!todos.lists.length) {
      return (
        <p>
          There are no lists here.<br />
          You can add a list by pressing the <span className="glyphicon glyphicon-plus-sign"></span> button above.
        </p>
      );
    } else {
      return todos.lists.map((list) =>
        <PanelLeftItem
          key={list.id}
          list={list}
          activeList={todos.activeList}
          selectList={() => { actions.selectList(list.id) }}
          editList={() => { actions.listModal(list) }}
        />
      )
    }
  }

  render() {
    const { actions } = this.props;
    return (
      <div className="pull-left col-sm-4">
        <div className="panel panel-success">
          <div className="panel-heading">
            Your to-do lists
            <a href="#" onClick={() => actions.listModal({})}><span className="glyphicon glyphicon-plus-sign pull-right"></span></a>
          </div>
          <div className="panel-body">
            <div className="list-group">
              {this.getItems()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PanelLeftComponent.displayName = 'PanelLeftComponent';

// Uncomment properties you need
PanelLeftComponent.propTypes = {
  actions: PropTypes.object.isRequired,
  todos: PropTypes.object.isRequired
};
// PanelLeftComponent.defaultProps = {};

export default PanelLeftComponent;
