import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

const MusicPlayerContext = React.createContext([{}, () => {}])

const MusicPlayerProvider = props => {
  const data = useStaticQuery(graphql`
    query {
      allSanityTrack {
        edges {
          node {
            title
            id
            url
            mainImage {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const tracks = data.allSanityTrack.edges

  console.log(tracks)

  const [state, setState] = useState({
    audioPlayer = new Audio(),
    tracks: tracks,
    isPlaying: false,
    currentTrackIndex: null,
  })

  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayerContext.Provider>
  )
}

export { MusicPlayerContext, MusicPlayerProvider }
