import React from 'react';
import PropTypes from 'prop-types'
import { Card, Button } from 'react-bootstrap';
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

const StyledCard = styled(Card)`
  width: 85%;
`
const StyledBody = styled(Card.Body)`
  backgroundColor: {this.props.storyboardMenuItems.color};
  text-align: center;
`

const StyledCardImage = styled(Card.Img)`
  Height: 50%;
`



class StoryboardMenu extends React.Component {
    render() {
      return (
        <MediaContainer>
          {this.props.storyboardMenuItems.map((menuItem) => {
            return (
              <StyledCard>
                <a href={menuItem.path}>
                <StyledCardImage src={menuItem.iconImage} alt={menuItem.title} />
                <Card.Body style={{ backgroundColor:"blue" }}>
                  <Card.Title style={{textAlign:"center"}}>{menuItem.title}</Card.Title>
                  <Card.Text style={{textAlign:"center"}}>
                    Description of your {menuItem.title} storyboard...
                  </Card.Text>
                </Card.Body></a>
              </StyledCard>
            )
          })}
        </MediaContainer>
      )
    }
  }

StoryboardMenu.propTypes = {
    storyboardMenuItems: PropTypes.object.isRequired,
}
export default StoryboardMenu;
