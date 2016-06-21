'use strict';

import React, { PropTypes } from 'react';
import  PanelRightItem from './PanelRightItemComponent';

class PanelRightComponent extends React.Component {
  constructor() {
    super();

    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentWillMount() {
    this.handleReset();
  }

  componentWillReceiveProps() {
    this.handleReset();
  }

  handleReset() {
    this.setState({
      name: '',
      item: {},
      buttonText: 'Add'
    });
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleEdit(item) {
    this.setState({
      name: item.name,
      item: item,
      buttonText: 'Save'
    });
  }

  handleDelete() {
    const activeList = this.props.todos.activeList;

    if(confirm('Delete "' + activeList.name + '" list?')) {
      this.props.actions.deleteList(activeList.id);
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    if(this.state.name.length) {
      if(this.state.item.id) {
        this.props.actions.editTodo(this.state.item.id, this.state.name);
      } else {
        this.props.actions.addTodo(this.state.name);
      }

      this.handleReset();
    }
  }

  getItems() {
    const { todos, actions } = this.props;

    if(todos.activeList.items && todos.activeList.items.length) {
      let items = [...todos.activeList.items].sort(function (a, b) {
        if (a.done && !b.done) {
          return 1;
        }

        return 0;
      });

      return items.map((item) => {
        return (
          <PanelRightItem
            item={item}
            key={item.id}
            onDone={() => actions.completeTodo(item.id)}
            onDelete={() => actions.deleteTodo(item.id)}
            onEdit={() => this.handleEdit(item)}
          />
        );
      });
    } else {
      return (
        <p>There are no items here.<br /> You can add an item by using the input field above.</p>
      );
    }
  }

  render() {
    const { todos } = this.props;
    if(Object.keys(todos.activeList).length) {
      return (
        <div className="pull-right col-sm-8 panel-right">
          <div className="panel panel-info">
            <div className="panel-heading">
              {todos.activeList.name}
              <a href="#" onClick={this.handleDelete}><span
                className="glyphicon glyphicon-trash pull-right"></span></a>
            </div>
            <div className="panel-body">
              <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <div className="col-sm-12 col-input-to-do">
                    <input type="text"
                           className="form-control"
                           id="listName"
                           value={this.state.name}
                           onChange={this.handleNameChange}
                           placeholder="Add a to-do"
                    />
                    <input type="submit"
                           className="btn btn-success btn-xs btn-add-to-do"
                           value={this.state.buttonText}
                    />
                  </div>
                </div>
              </form>
              <ul className="list-group form-inline">
                {this.getItems()}
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="pull-right col-sm-8 alert alert-danger">Please add a list in order use todos.</div>
      );
    }
  }
}

PanelRightComponent.displayName = 'PanelRightComponent';

// Uncomment properties you need
PanelRightComponent.propTypes = {
  actions: PropTypes.object.isRequired,
  todos: PropTypes.object.isRequired
};
// PanelRightComponent.defaultProps = {};

export default PanelRightComponent;
