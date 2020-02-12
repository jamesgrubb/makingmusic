import React, { useContext } from "react"
import { MusicPlayerContext } from "../../context/MusicPlayerContext"
import TrackList from "../trackList"
import "track.scss"

const Tracks = ({ tracks }) => {
  const [state, setState] = useContext(MusicPlayerContext)
  const tracks = state.tracks
  return (
    <>
      <div className="track">
        <div className="track__imageWrapper">
          <Image src="track.src" alt="" />
          <div className="track__buttons">
            <Button isPlaying={isPLaying} />
          </div>
        </div>
        <div className="track__details">
          <h2 className="track__title">{track.title}</h2>
        </div>
      </div>
    </>
  )
}
export default Track
