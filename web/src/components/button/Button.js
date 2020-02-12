import React from "react"
import "./button.scss"

const Button = ({ handlePlayTrack, className }) => {
  return (
    <>
      <button className="track__button" onClick={handlePlayTrack}>
        <svg
          className="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0,0,100,100"
        >
          <path className={className} />
        </svg>
      </button>
    </>
  )
}

export default Button
