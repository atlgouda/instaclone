import React, { Component } from 'react'
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa'
import styled from 'styled-components'

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 26px 5vw;
  width: 90vw;
  height: 25px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0,0,0,.0975);
  font-family: "Open Sans";
  `
  const InstaIcons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 25%;
    line-height: 1.15;
  `
  const InstaAvatar = styled.div`
    font-size: 1.75rem;
    font-family: 'Oleo Script',cursive;
    margin: 0;`

class Navbar extends Component {
  render () {
    return (
      <NavbarContainer>
        <InstaAvatar><FaInstagram /> | Instaclone</InstaAvatar>
        <FaSearch/><input type="text"/>
        <InstaIcons>
          <FaCompass />
          <FaHeartO />
          <FaUser />
        </InstaIcons>
      </NavbarContainer>
    )
  }
}

export default Navbar
