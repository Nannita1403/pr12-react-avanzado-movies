import React, { useState } from 'react'

import SearchBar from './Searchbar'
import Login from '../Login/Login'
import { Nav, NavWrapper } from './Navbar.Styles'

const Navbar = ({ handleMovieSearch, showNavbar }) => {
  return (
    <>
      {showNavbar && (
        <Nav>
          <NavWrapper>
            <SearchBar handleMovieSearch={handleMovieSearch} />
            <Login />
          </NavWrapper>
        </Nav>
      )}
    </>
  )
}

export default Navbar