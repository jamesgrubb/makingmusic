import React from "react"
import "./play.scss"
import PropTypes from "prop-types"

const Button = props => (
  <>
    <svg
      onClick={props.handleClick}
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0,0,50,100"
      preserveAspectRatio="none"
    >
      <path
        vector-effect="non-scaling-stroke"
        className={props.ClassName}
        d={props.path}
      />
    </svg>
  </>
)

export default Button

Button.propTypes = {
  rest: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}
