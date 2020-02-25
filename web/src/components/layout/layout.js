import React from "react"
import { Link } from "gatsby"
import { MusicPlayerProvider } from "../../context/MusicPlayerContext"
import Seo from "../Seo"

import "./styles.scss"

const Layout = ({ children }) => {
  return (
    <MusicPlayerProvider>
      <Seo title="Sounds Like" />
      <div className="container">
        <header className="header">
          <h1 className="header__title">Rupert Gibson</h1>
          <nav className="header__nav">
            <ul className="header__navItems">
              <Link to="/about" state={{ playing: "stop" }}>
                about
              </Link>
              <Link to="/contact" state={{ playing: "stop" }}>
                contact
              </Link>
              <Link to="/tracks" state={{ playing: "stop" }}>
                music
              </Link>
            </ul>
          </nav>
        </header>
        <main class="main">{children}</main>
      </div>
    </MusicPlayerProvider>
  )
}

export default Layout
