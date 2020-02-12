import React from "react"
import "./trackList.scss"
import useMusicPlayer from "../../useMusicPlayer"
import Duotone from "../duotone"
import Image from "gatsby-image"
import Button from "../button/Button"
const TrackList = () => {
  // const [state, setState] = useContext(MusicPlayerContext)
  const { trackList, currentTrackName, playTrack, isPlaying } = useMusicPlayer()
  console.log(currentTrackName)
  return (
    <>
      <div className="trackList">
        {trackList.map(({ node: track }, index) => {
          return (
            <div key={index} className="track">
              <Duotone />

              <div className="track__image">
                <Button
                  handlePlayTrack={() => playTrack(index)}
                  className={
                    currentTrackName === track.title && isPlaying
                      ? "pause"
                      : "play"
                  }
                />
                <Image
                  style={{ "--aspect-ratio": 1, filter: "url(#duotone)" }}
                  fluid={track.mainImage.asset.fluid}
                />
              </div>
              <h2 className="track__title">{track.title}</h2>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default TrackList
