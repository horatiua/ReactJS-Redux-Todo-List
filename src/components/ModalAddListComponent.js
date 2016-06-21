'use strict';

global.jQuery = require('jquery.1');
import React, { PropTypes } from 'react';

class ModalAddListComponent extends React.Component {
  constructor() {
    super();

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCloseState = this.handleCloseState.bind(this);
  }

  componentWillMount() {
    this.handleClose();

    jQuery('body').on('hidden.bs.modal', '#modalAddList', jQuery.proxy(function() {
      this.handleCloseState();
    }, this));
  }

  componentWillReceiveProps(nextProps) {
    this.handleClose();

    if(nextProps.todos.listModal && Object.keys(nextProps.todos.listModal).length) {
      this.setState({
        name: nextProps.todos.listModal.name,
        buttonText: 'Save',
        title: 'Edit list'
      });
    }

    if(nextProps.todos.listModal) {
      jQuery('#modalAddList').modal('show');
    } else {
      jQuery('#modalAddList').modal('hide');
    }
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit(event) {
    const { actions, todos } = this.props;

    event.preventDefault();

    if(this.state.name.length) {

      if(todos.listModal.id) {
        actions.editList(this.state.name, todos.listModal.id);
      } else {
        actions.addList(this.state.name);
      }

      this.handleClose();
    } else {
      this.setState({
        error: true
      });
    }
  }

  handleClose() {
    this.setState({
      error: false,
      name: '',
      buttonText: 'Add',
      title: 'Add list'
    });
  }

  handleCloseState() {
    if(this.props.todos.listModal) {
      this.props.actions.listModal(null);
    }
  }

  render() {
    return (
      <div className="modal fade" id="modalAddList" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">{this.state.title}</h4>
            </div>
            <div className="modal-body">
              <div className={'alert alert-danger ' + (this.state.error ? '' : 'hide')}>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                Please insert a list name!
              </div>
              <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <div className="col-sm-12">
                    <input type="text" className="form-control" id="listName" value={this.state.name} onChange={this.handleNameChange} />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.handleClose}>Cancel</button>
              <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>{this.state.buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ModalAddListComponent.displayName = 'ModalAddListComponent';

// Uncomment properties you need
ModalAddListComponent.propTypes = {
  actions: PropTypes.object.isRequired,
  todos: PropTypes.object.isRequired
};
// ModalAddListComponent.defaultProps = {};

export default ModalAddListComponent;
