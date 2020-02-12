import React, { useContext } from "react"
import Tracklist from "../components/trackList"
import { MusicPlayerContext } from "../context/MusicPlayerContext"
import Layout from "../components/layout/Layout"

export default () => {
  const [state, setState] = useContext(MusicPlayerContext)
  const tracks = state.tracks
  return (
    <React.Fragment>
      <Layout>
        <Tracklist />
      </Layout>
    </React.Fragment>
  )
}
