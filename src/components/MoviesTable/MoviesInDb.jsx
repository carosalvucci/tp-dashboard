import React from 'react';
import './moviesTable.css'
import PropTypes from 'prop-types'

export default function MoviesInDb(props) {
  return (
        <ul className='moviesTableGridRows'>
            <li>{props.title}</li> 
            <li>{props.length}</li> 
            <li>{props.rating}</li> 
            <li>{props.genre ? props.genre.name : 'Sin Género'}</li> 
            <li>{props.awards}</li> 
        </ul>
  );
}

MoviesInDb.propTypes = {
  atributes: PropTypes.shape({
    title: PropTypes.string.isRequired,
    length: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    rating: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    awards: PropTypes.string.isRequired
  })
}

MoviesInDb.defaultProps = {
  title: "aTitle",
  length: 0,
  rating: 0.0,
  genre: "aGenre",
  awards: 0
}