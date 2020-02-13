import React from "react"
import { Link } from "gatsby"
import Seo from "../Seo"

import "./styles.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Seo title="Sounds Like" />

      <div className="container">
        <header className="header">
          <h1 className="header__title">Rupert Gibson</h1>
          <nav className="header__nav">
            <ul className="header__navItems">
              <Link to="/about">about</Link>
              <Link to="/contact">contact</Link>
              <Link to="/tracks">music</Link>
            </ul>
          </nav>
        </header>
        <main class="main">{children}</main>
      </div>
    </>
  )
}

export default Layout
