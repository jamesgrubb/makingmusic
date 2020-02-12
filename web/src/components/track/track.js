import React from "react"
import { Image } from "gatsby"
import "track.scss"

const Track = ({ track, isPlaying }) => {
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
