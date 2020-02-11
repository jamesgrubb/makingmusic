import React, { useContext } from "react"
import "./trackList.scss"
import { MusicPlayerContext } from "../../context/MusicPlayerContext"
import Duotone from "../duotone"
import Image from "gatsby-image"
import Play from "../buttons/play"
const TrackList = () => {
  const [state, setState] = useContext(MusicPlayerContext)
  return (
    <>
      {JSON.stringify(state.tracks, null, 2)}
      <div className="trackList">
        {state.tracks.map(({ node: track }) => {
          return (
            <>
              <div className="track">
                <Duotone />
                <div className="track__image">
                  <Image
                    style={{ "--aspect-ratio": 1, filter: "url(#duotone)" }}
                    fluid={track.mainImage.asset.fluid}
                  />
                </div>
                <h2 className="track__title">{track.title}</h2>
                <Play />
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default TrackList
