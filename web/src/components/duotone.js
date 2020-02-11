import React from "react"

const Duotone = () => {
  return (
    <svg
      width="0"
      height="0"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "none" }}
    >
      <defs>
        <filter id="duotone">
          <feColorMatrix
            type="matrix"
            values=".33 .33 .33 0 0
              .33 .33 .33 0 0
              .33 .33 .33 0 0
              0 0 0 1 0"
          ></feColorMatrix>

          <feComponentTransfer color-interpolation-filters="sRGB">
            <feFuncR
              type="table"
              tableValues=".996078431  .984313725"
            ></feFuncR>
            <feFuncG
              type="table"
              tableValues=".125490196  .941176471"
            ></feFuncG>
            <feFuncB
              type="table"
              tableValues=".552941176  .478431373"
            ></feFuncB>
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  )
}

export default Duotone
