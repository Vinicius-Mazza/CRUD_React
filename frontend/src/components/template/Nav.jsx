import './Nav.css'
import NavItem from './NavItem'
import React from 'react'

export default props =>
  <aside className="menu-area">
    <nav className="menu">
      <NavItem link="/" icon="fa fa-home" title="Início"/>
      <NavItem link="/users" icon="fa fa-users" title="Usuários"/>
    </nav>
  </aside>