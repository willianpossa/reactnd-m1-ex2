import React, { Component } from 'react';

import MovieCard from './MovieCard';

class Dashboard extends Component {
  
  render() {
    let { 
    	usersByMovies,
  		movies,
  		users } = this.props;
    
    const MovieCards = Object.keys(movies).map(id => (
	    <MovieCard 
      		key={ id }
			usersWhoLiked={ usersByMovies[id] }
  			users={ users }
			movie={ movies[id] }
		/>
    ));
  	
    return (
    	<div>{ MovieCards }</div>
    );
  }
}

export default Dashboard;