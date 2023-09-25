import React, { Component } from 'react';
import './moviesTable.css'
import { MoviesInDb } from '../index'
// import { moviesInDb } from '../../constants';

class MoviesTableRows extends Component {
  constructor(props){
    super(props);
      this.state = {
        moviesInDb: []
      }
  }

  async componentDidMount() {
    try {
      const apiMovies = await fetch('/api/movies')
      const dataMovies = await apiMovies.json();

      this.setState({
        moviesInDb: dataMovies.data
      })

    } catch (e) {
      console.error(e)
    }
  }


  render() {
    return (
      this.state.moviesInDb.map( (movie, i) => {
        return <MoviesInDb key={movie + i} {...movie} />})
    )
  }
}

export default MoviesTableRows
