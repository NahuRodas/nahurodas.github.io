import React, { Component } from 'react'

export class NavBar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className="container">
          <div className="navbar-btn">
            <button className='btn btn-hide-menu'><i class='bx bx-menu'></i></button>
          </div>
          <div className='main-navbar'>
            <div className="navbar-btn">
            <button className='btn btn-sobre-mi'>Sobre mi</button>
          </div>
          <div className="navbar-btn">
            <button className='btn btn-curriculum'>Curriculum</button>
          </div>
          <div className="navbar-btn">
            <button className='btn btn-proyectos'>Proyectos</button>
          </div>
          <div className="navbar-btn">
            <button className='btn btn-contacto'>Contacto</button>
          </div>
          </div>
          <div className="navbar-btn">
            <button className='btn-toggle-dark-mode'></button>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar