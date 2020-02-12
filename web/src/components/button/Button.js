import React from "react"
import "./button.scss"
import PropTypes from "prop-types"

const Button = ({ handlePlayTrack, isPlaying }) => {
  return (
    <>
      <div className="track__button">
        <svg
          onClick={handlePlayTrack}
          className="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0,0,100,100"
          // preserveAspectRatio="none"
        >
          <path
            className={isPlaying ? "pause" : "play"}
            // className="pause"

            // vector-effect="non-scaling-stroke"
            // d={props.path}
          />
        </svg>
      </div>
    </>
  )
}

export default Button

Button.propTypes = {
  rest: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}
