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


const Animation = styled.iframe`
	width: 100%;
	height: 40vh;
	margin: 5%;

`



class Theater extends React.Component {
	render() {
		return (
			<MediaContainer>
				{this.props.animations.map((animation) => {
					return <Animation
						src={animation.YouTubeSrc}
						frameborder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					/>
				})}
			</MediaContainer>
		)
	}
}

Theater.propTypes = {
	animations: PropTypes.object.isRequired
}
export default Theater;
