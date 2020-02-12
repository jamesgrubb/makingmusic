import React from "react"
import Tracklist from "../components/trackList"

import Layout from "../components/layout/"

export default () => {
  return (
    <React.Fragment>
      <Layout>
        <Tracklist />
      </Layout>
    </React.Fragment>
  )
}
