import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ListGroup, Nav } from 'react-bootstrap';



const LandingContainer = styled.div`
  align-self: center;
  display: flex;
	justify-content: center;
	background-color: #E3E3E3;
`
const LandingImage = styled.img`
	align-self: center;
	height: 95vh;
	width: auto;
	max-width: 100vw;
`
const StyledNav = styled(Nav)`
	position: absolute;
	display: block;
	left: 35%;
`
const StyledNavLink = styled(Nav.Link)`
	font-size: 1.5em;
	height: 40px;
`


const StyledListItem = styled(ListGroup.Item)`
	background: transparent;
`


class Landing extends React.Component {
    render() {
      return (
				<LandingContainer id="land" >
					<LandingImage src={this.props.image.imgSrc} alt={this.props.image.title} />
					<StyledNav>
						<StyledNavLink href="/Comics">Comics</StyledNavLink>
						<StyledNavLink href="/InkIllustrations">Ink Illustrations</StyledNavLink>
						<StyledNavLink href="/Storyboards">Storyboards</StyledNavLink>
						<StyledNavLink href="/Contact">Contact</StyledNavLink>
					</StyledNav>
				</LandingContainer>
			)
    }
  }

Landing.propTypes = {
    image: PropTypes.array.isRequired
}
export default Landing;

