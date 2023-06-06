import React from "react"
import styled from "styled-components"

function Header(props) {
  const {titleText, link, imgSrc, imgAlt, formToggle, showForm} = props

  return (
    <StyledHeader>
      <img src={imgSrc} alt={imgAlt} />
      <Title>{titleText}</Title>
      <FormToggle onClick={formToggle}>{showForm ? "Hide Form" : "Show Form"}</FormToggle>
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
  margin-right: 12px;
  color: #61DAFB;
  font-weight: 700;
  font-size: 26px;
`

const FormToggle = styled.h3`
  color: red;
  border-style: solid;
  border-radius: 5px;
  border-color: white;
`

const Link = styled.a`
  margin-left: auto;
  text-decoration: none;
  color: #61DAFB;
`

export default Header