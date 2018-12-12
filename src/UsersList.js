import React, { Component } from 'react';

import ListItem from './ListItem';

class UsersList extends Component {
  
  render() {
    let { usersLiked, users } = this.props;
    
    if(!usersLiked)
      return <p>None of the current users liked this movie</p>;
    
    const listItems = usersLiked.map(user => (
      <ListItem username={ users[user].name } />
    ));
    
    return (
      <div>
      	<p>Liked By: </p>
      	<ul>
          { listItems }
        </ul>
      </div>
    );
  }
}

export default UsersList;