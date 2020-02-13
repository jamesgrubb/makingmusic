import React from "react"
import "./button.scss"

const Button = ({ handlePlayTrack, className }) => {
  return (
    <>
      <button className="track__button" onClick={handlePlayTrack}>
        <svg
          className="button"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0,0,100,100"
          width="100"
          height="100"
        >
          <path className={className} />
        </svg>
      </button>
    </>
  )
}

export default Button
