import React from "react"
import "./src/styles/global.scss"
import Layout from "./src/components/layout"

import { MusicPlayerProvider } from "./src/context/MusicPlayerContext"

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => (
  <MusicPlayerProvider>{element}</MusicPlayerProvider>
)
