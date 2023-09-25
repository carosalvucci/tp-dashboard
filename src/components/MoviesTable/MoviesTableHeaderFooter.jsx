import React from 'react'
import './moviesTable.css'

export default function moviesTableGridHeaderFooter() {
  return (
        <ul className='moviesTableGridHeaderFooter'>
          <li>Títulos</li> 
          <li>Duración</li> 
          <li>Rating</li> 
          <li>Género</li> 
          <li>Premios</li> 
        </ul>
  );
}

