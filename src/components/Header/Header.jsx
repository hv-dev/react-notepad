import React from "react"

function Header(props) {
  const {leftText, rightText, imgSrc, imgAlt} = props

    return (
        <div className="header">
            <img src={imgSrc} alt={imgAlt} />
            <h2>{leftText}</h2>
            <h3>{rightText}</h3>
        </div>
    )
}

export default Header