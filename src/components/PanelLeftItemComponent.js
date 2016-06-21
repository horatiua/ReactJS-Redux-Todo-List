'use strict';

import React, { PropTypes } from 'react';

class PanelLeftItemComponent extends React.Component {
  render() {
    const { list, activeList, selectList, editList} = this.props;
    const activeItem = list.id == activeList.id;

    return (
      <a href="#" className={'list-group-item ' + (activeItem ? 'active' : '')} onClick={selectList}>
        {list.name}
        <span className={'glyphicon glyphicon-edit pull-right ' + (activeItem ? '' : 'hide')}
              onClick={editList}></span>
      </a>
    );
  }
}

PanelLeftItemComponent.displayName = 'PanelLeftItemComponent';

// Uncomment properties you need
PanelLeftItemComponent.propTypes = {
  list: PropTypes.object.isRequired,
  activeList: PropTypes.object.isRequired,
  selectList: PropTypes.func.isRequired,
  editList: PropTypes.func.isRequired
};
// PanelLeftItemComponent.defaultProps = {};

export default PanelLeftItemComponent;
