'use strict';

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class PanelLeftItemComponent extends React.Component {
  render() {
    const { list, selectList, editList, params} = this.props,
          activeItem = list.id == params.listId,
          path = '/list/' + list.id;

    return (
      <Link to={path} className="list-group-item" activeClassName="active" onClick={selectList}>
        {list.name}
        <span className={'glyphicon glyphicon-edit pull-right ' + (activeItem ? '' : 'hide')}
              onClick={editList}></span>
      </Link>
    );
  }
}

PanelLeftItemComponent.displayName = 'PanelLeftItemComponent';

// Uncomment properties you need
PanelLeftItemComponent.propTypes = {
  list: PropTypes.object.isRequired,
  selectList: PropTypes.func.isRequired,
  editList: PropTypes.func.isRequired
};
// PanelLeftItemComponent.defaultProps = {};

export default PanelLeftItemComponent;
