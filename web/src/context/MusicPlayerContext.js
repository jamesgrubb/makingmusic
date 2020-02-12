import React, { useState, useEffect } from "react"
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

  const [state, setState] = useState({
    audioPlayer: {},
    tracks: tracks,
    currentTrackIndex: null,
    isPlaying: false,
  })
  useEffect(() => {
    setState({
      audioPlayer: new Audio(),
      tracks: tracks,
      currentTrackIndex: null,
      isPlaying: false,
    })
  }, [tracks])
  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayerContext.Provider>
  )
}

export { MusicPlayerContext, MusicPlayerProvider }
