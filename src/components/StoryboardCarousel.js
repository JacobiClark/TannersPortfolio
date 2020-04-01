import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Carousel, } from 'react-bootstrap';

const CarouselContainer = styled.div`
  align-self: center;
  display: flex;
	justify-content: center;
`
const StyledCarousel = styled(Carousel)`
	align-self: center;
  max-height: 90vh;
  max-width: 100%
	width: auto;
	max-width: 100vw;
`

const StyledCarouselImage = styled(Carousel.Item)`
  align-self: center;
  max-height: 90vh;
  max-width: 100%
  width: 90%;
`



class StoryboardCarousel extends React.Component {
    render() {
      return (
        <CarouselContainer>
          <StyledCarousel>
            {this.props.storyboards.map((storyboardMedia) =>
              <StyledCarouselImage>
                <img
                  className="d-block w-100"
                  src={storyboardMedia.imgSrc}
                  alt={storyboardMedia.id}
                />
              </StyledCarouselImage>
            )}
          </StyledCarousel>
        </CarouselContainer>
      );
    }
  }

StoryboardCarousel.propTypes = {
  storyboards: PropTypes.object.isRequired
}
export default StoryboardCarousel;
