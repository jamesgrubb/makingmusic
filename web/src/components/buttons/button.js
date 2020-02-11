import React from "react"
import "./button.scss"
import PropTypes from "prop-types"

const Button = props => (
  <>
    <div className="track__button">
      <svg
        onClick={props.handleClick}
        className="button"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0,0,100,100"
        // preserveAspectRatio="none"
      >
        <path
          className="path"
          stroke="yellow"
          // vector-effect="non-scaling-stroke"
          // d={props.path}
        />
      </svg>
    </div>
  </>
)

export default Button

Button.propTypes = {
  rest: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}
