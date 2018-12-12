import React, { Component } from 'react';

import UsersList from './UsersList';

class MovieCard extends Component {

  render() {
    let { usersWhoLiked, users, movie } = this.props;
    
    return (
      <div>
      	<h2>{ movie.name }</h2>
      	<UsersList usersLiked={ usersWhoLiked } users={ users } />
      </div>
    );
  }
}

export default MovieCard;