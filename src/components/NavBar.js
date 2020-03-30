import React, { Component } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import styled from 'styled-components'

const StyledDropdownItem = styled(Dropdown.Item)`
  background-color: palevioletred;
  color: white;
`

const StyledDropdown = styled(Dropdown)`
  display: block;
  @media (min-width: 900px) {
    display: none;
  }
`

const StyledNavLink = styled(Nav.Link)`
  display: inline;
  @media (min-width: 900px) {
    display: none;
  }
`


class NavBar extends Component {
	render () {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Tanner Jensen</Navbar.Brand>
        <Nav>
          <StyledNavLink href="/Comics">Comics</StyledNavLink>
          <StyledNavLink href="/InkIllustrations">Ink Illustrations</StyledNavLink>
          <StyledNavLink href="/Storyboards">Storyboards</StyledNavLink>
          <StyledNavLink href="/Contact">Contact</StyledNavLink>
        </Nav>
        <StyledDropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Menu
          </Dropdown.Toggle>
          <Dropdown.Menu alignRight variant="dark">
            <StyledDropdownItem href="/Comics">Comics</StyledDropdownItem>
            <StyledDropdownItem href="/InkIllustrations">Ink Illustrations</StyledDropdownItem>
            <StyledDropdownItem href="/Storyboards">Storyboards</StyledDropdownItem>
            <StyledDropdownItem href="/Contact">Contact</StyledDropdownItem>
          </Dropdown.Menu>
        </StyledDropdown>
      </Navbar>
    )          
  }
}

export default NavBar;
