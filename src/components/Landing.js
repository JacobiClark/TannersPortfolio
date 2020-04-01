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
	align-content: center;
	background-color: red;
  height: auto;
	width: 45%;
	height: 35%;
	margin: 2%;
  @media (min-width: 900px) {
    width: 28%
  }
`
const NavImage = styled.img`
	margin: 2.5%;
  height: 80%;
  width: 95%;
	max-height: 170px;
`

const NavText = styled.h4`
	margin-bottom: auto;
`


class Landing extends React.Component {
    render() {
      return (
				<LandingContainer >
					{this.props.images.map((image) => {
     		    return (
								<NavPiece href={image.path}>
									<NavImage src={image.imgSrc} alt={image.title} />
									<NavText>{image.title}</NavText>
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

