import React from "react"
import { MusicPlayerProvider } from "../../context/MusicPlayerContext"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <header className="header">
          <h1 className="header__title">Rupert Gibson</h1>
          <nav className="header__nav">
            <ul className="header__navItems">
              <li>about</li>
              <li>contact</li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </div>
    </MusicPlayerProvider>
  )
}

export default Layout
