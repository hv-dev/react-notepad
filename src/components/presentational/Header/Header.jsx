import React from "react"
import styled from "styled-components"

function Header(props) {
  const {titleText, link, imgSrc, imgAlt} = props

  return (
    <StyledHeader>
      <img src={imgSrc} alt={imgAlt} />
      <Title>{titleText}</Title>
      <Link href={link.url}>{link.text}</Link>
      
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: #21222A;
  height: 90px;
  padding: 30px 25px;

  img {
    height: 80%;
    margin-right: 0.5%;
  }
`
const Title = styled.h2`
  margin-right: auto;
  color: #61DAFB;
  font-weight: 700;
  font-size: 26px;
`
const Link = styled.a`
  text-decoration: none;
  color: #61DAFB;
`

export default Header