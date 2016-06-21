'use strict';

import React, { PropTypes } from 'react';

class PanelRightItemComponent extends React.Component {
  constructor() {
    super();

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    if(confirm('Delete "' + this.props.item.name + '" item?')) {
      return this.props.onDelete();
    }
  }

  render() {
    const { item, onDone, onEdit } = this.props;
    const completedItem = item.done;

    return (
      <li className={'list-group-item ' + (completedItem ? 'list-group-item-success' : '')}>
        <input type="checkbox" className="pull-left list-checkbox" checked={completedItem} onChange={onDone} />
        {item.name}
        <a href="#" className={completedItem ? 'hide' : ''} onClick={this.handleDelete}><span className="glyphicon glyphicon-trash pull-right"></span></a>
        <a href="#" className={completedItem ? 'hide' : ''} onClick={onEdit}><span className="glyphicon glyphicon-edit pull-right"></span></a>
      </li>
    );
  }
}

PanelRightItemComponent.displayName = 'PanelRightItemComponent';

// Uncomment properties you need
PanelRightItemComponent.propTypes = {
  item: PropTypes.object.isRequired,
  onDone: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};
// PanelRightItemComponent.defaultProps = {};

export default PanelRightItemComponent;
