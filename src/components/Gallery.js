import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MediaContainer = styled.div`
	align-self: center;
	display: flex;
	flex-wrap: wrap;
	align-items: top;
	justify-content: center;
	margin: 0 auto;
	max-width: 1500px;
`


const ArtPiece = styled.img`
	width: 9%;
	height: 84px;
	margin: 2%;
	@media (min-width: 900px) {
		width: 45%
	}
`



class Gallery extends React.Component {
	render() {
		return (
			<MediaContainer>
				{this.props.images.map((image) => {
					return <ArtPiece src={image.imgSrc} alt={image.title} />
				})}
			</MediaContainer>
		)
	}
}

Gallery.propTypes = {
	images: PropTypes.object.isRequired
}
export default Gallery;