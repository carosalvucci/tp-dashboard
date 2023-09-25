import React, { useState, useEffect } from 'react';
import image from '../assets/images/aBA 2.png'
import PropTypes from 'prop-types';
import { ContentWrapper, GenresInDb, LastProductInDb, ContentRowMovies, TableGrid, SearchMovies, NotFound } from './index';
import { Link, Route, Routes } from 'react-router-dom';

export default function SideBar(props) {

  const [userInfo, setUserInfo] = useState({
    count: 0,
    users: []
  });
  const [productInfo, setProductInfo] = useState({
    count: 0,
    countByCategory: {},
    products: []
  });
  

  async function fetchData(endpoint, setState) {
    try {
      const apiFetch = await fetch(endpoint)
      const data = await apiFetch.json()

      setState(data.data)
      console.log(data.data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    async function data() {
      await Promise.all([
        fetchData('/api/user/list', setUserInfo),
        fetchData('/api/product/list', setProductInfo)
      ])
    }
    data()
  }, [])

  console.log(userInfo)

  return (
    <>
      <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
        <Link exact className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
          <div style={{ padding: "1.3rem" }}>
            <img className="w-100" src={image} alt="Adventure BA" />
          </div>
        </Link>

        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - Adventure BA</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Actions</div>
        {props.sideBar.map((nav) =>
          nav.title ? (
            <li key={nav.id} className="nav-item">
              <Link className="nav-link collapsed" to={nav.route}>
                <i className="fas fa-fw fa-folder"></i>
                <span>{nav.title}</span></Link>
            </li>
          ) : null
        )}

        <hr className="sidebar-divider d-none d-md-block" />
      </ul>



      <Routes>
        <Route path='/' exact element={
          <ContentWrapper
            productInfo={productInfo}
            userInfo={userInfo}
          />}
        />

        <Route path='/genres' exact element={
          <GenresInDb
            
            countByCategory={productInfo.countByCategory}
          />}
        />

        <Route path='/lastProduct' exact element={
          <LastProductInDb
            lastProduct={productInfo.lastProduct}

          />}
        />

        <Route path='/stats' exact element={
          <ContentRowMovies
            usersCount={userInfo.count}
            productInfo={productInfo}
          />}
        />

        <Route path='/tableUsers' exact element={
          <TableGrid
            data={userInfo.users}
            header={['id', 'name', 'email', 'detail']}
          />}
        />

        <Route path='/tableProducts' exact element={
          <TableGrid
            data={productInfo.products}
            header={['id', 'name', 'category', 'detail']}
          />}
        />

        <Route path='/searchmovies' exact element={SearchMovies} />
        <Route element={NotFound} />
      </Routes>
    </>
  );
}

SideBar.propTypes = {
  sideBar: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

SideBar.defaultProps = {
  sideBar: [
    {
      id: "default",
      title: "Default",
    },
  ],
};