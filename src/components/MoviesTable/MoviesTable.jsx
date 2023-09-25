import React from 'react'
import './moviesTable.css'
import { MoviesTableRows, MoviesTableGridHeaderFooter } from '../index'

export default function MoviesTable() {
  return (
          <div className='containerMoviesTable'>
            <div className='moviesTableContainer'>
              <MoviesTableGridHeaderFooter />

              <MoviesTableRows />
    
              <MoviesTableGridHeaderFooter />
            </div>
          </div>

  );
}

