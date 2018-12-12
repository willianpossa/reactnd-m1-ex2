import React, { Component } from 'react';

class ListItem extends Component {
  
  render() {
    
    return (
      <li>{ this.props.username }</li>
    );
  }
}

export default ListItem;