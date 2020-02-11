import React from "react"
import "./src/styles/global.scss"

import { MusicPlayerProvider } from "./src/context/MusicPlayerContext"

export const wrapRootElement = ({ element }) => (
  <MusicPlayerProvider>{element}</MusicPlayerProvider>
)
