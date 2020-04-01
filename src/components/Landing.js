import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ListGroup, Nav } from 'react-bootstrap';



const LandingContainer = styled.div`
	align-self: center;
	display: flex;
	flex-wrap: wrap;
	align-items: top;
	justify-content: center;
	margin: 0 auto;
	max-width: 1500px;
	background-color: #E3E3E3;
	min-height: 70vh;
`
const NavPiece = styled.a`
  height: auto;
  width: 45%;
	margin: 2%;
	text-align: center;
  @media (min-width: 900px) {
    width: 28%
  }
`
const NavImage = styled.img`
	margin-top: 2.5%;
  height: auto;
  width: 95%;
	max-height: 170px;
	align-text: center;
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
				<LandingContainer >
					{this.props.images.map((image) => {
     		    return (

								<NavPiece href={image.path}>
									<NavImage src={image.imgSrc} alt={image.title} />
									<h4>{image.title}</h4>
								</NavPiece>


						)
        	})}

				</LandingContainer>
			)
    }
  }

Landing.propTypes = {
    images: PropTypes.array.isRequired
}
export default Landing;

