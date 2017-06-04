import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <div className="hero-head">
    <header className="nav">
      <div className="container">
        <div className="nav-left">
          <a className="nav-item">
            Kings
          </a>
        </div>
        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="nav-right nav-menu">
          <IndexLink to='/'
            className="nav-item"
            activeClassName="is-active">
            Play
          </IndexLink>
          <Link to='/settings'
            className="nav-item"
            activeClassName="is-active">
            Settings
          </Link>
        </div>
      </div>
    </header>
  </div>
)

export default Header
