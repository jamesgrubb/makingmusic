import React from "react"
import { MusicPlayerProvider } from "../context/MusicPlayerContext"
import Tracklist from "../components/trackist/tracklist"
import Layout from "../components/layout/layout"

export default () => {
  return (
    <MusicPlayerProvider>
      <React.Fragment>
        <Layout>
          <main>
            <Tracklist />
          </main>
        </Layout>
      </React.Fragment>
    </MusicPlayerProvider>
  )
}
