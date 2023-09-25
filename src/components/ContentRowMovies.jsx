import React from 'react';
import { Cards } from './index'


export default function ContentRowMovies({usersCount, productInfo}) {
  return (
      <div className='row'>
          <Cards 
            title = "Users total"
            quantity = {usersCount}
            color = "primary"
            icon = "fa-film" />
          <Cards 
            title = "Products total"
            quantity = {productInfo.count}
            color = "success"
            icon = "fa-award" />
          <Cards 
            title = "Services total"
            quantity = {productInfo.countByCategory.Servicio}
            color = "warning"
            icon = "fa-user" />
      </div>
  )
}

