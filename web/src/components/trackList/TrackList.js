import React, { useContext } from "react"
import "./trackList.scss"
import { MusicPlayerContext } from "../../context/MusicPlayerContext"
import Duotone from "../duotone"
import Image from "gatsby-image"
import Button from "../button/Button"
const TrackList = () => {
  const [state, setState] = useContext(MusicPlayerContext)
  const { isPlaying, currentTrackIndex } = state

  return (
    <>
      <div className="trackList">
        {state.tracks.map(({ node: track }, index) => {
          return (
            <>
              <div className="track">
                <Duotone />

                <div className="track__image">
                  <Image
                    style={{ "--aspect-ratio": 1, filter: "url(#duotone)" }}
                    fluid={track.mainImage.asset.fluid}
                  />
                  <Button
                    isPlaying={isPlaying}
                    // handlePlayTrack={() => handlePlayTrack(index)}
                  />
                </div>
                <h2 className="track__title">{track.title}</h2>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default TrackList
