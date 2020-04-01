import React, { Component } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'



const StyledDropdownItem = styled(Dropdown.Item)`
	background-color: palevioletred;
	color: white;
`
const StyledDropdownToggle = styled(Dropdown.Toggle)`
	background-color: transparent;
	border: none;
	&:after {
		content: none;
	}


`

const StyledDropdown = styled(Dropdown)`
	display: block;
	@media (min-width: 900px) {
		display: none;
	}
`


const StyledNavLink = styled(Nav.Link)`
	display: none;
	@media (min-width: 900px) {
		display: inline;
	}
`


class NavBar extends Component {
	render () {
		return (
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="/">Tanner Dane Art</Navbar.Brand>
				<Nav>
					<StyledNavLink href="/Comics">Comics</StyledNavLink>
					<StyledNavLink href="/InkIllustrations">Ink Illustrations</StyledNavLink>
					<StyledNavLink href="/Animations">Animations</StyledNavLink>
					<StyledNavLink href="/Storyboards">Storyboards</StyledNavLink>
					<StyledNavLink href="/Contact">Contact</StyledNavLink>
				</Nav>
				<StyledDropdown style={{left: '40%'}}>
					<StyledDropdownToggle size="lg" variant="secondary">
						<FontAwesomeIcon icon={faBars} />
					</StyledDropdownToggle>
					<Dropdown.Menu alignRight variant="dark">
						<StyledDropdownItem href="/Comics">Comics</StyledDropdownItem>
						<StyledDropdownItem href="/InkIllustrations">Ink Illustrations</StyledDropdownItem>
						<StyledDropdownItem href="/Animations">Animations</StyledDropdownItem>
						<StyledDropdownItem href="/Storyboards">Storyboards</StyledDropdownItem>
						<StyledDropdownItem href="/Contact">Contact</StyledDropdownItem>
					</Dropdown.Menu>
				</StyledDropdown>
			</Navbar>
		)          
	}
}

export default NavBar;
