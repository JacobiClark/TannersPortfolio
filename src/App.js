import React from 'react';
import styled from 'styled-components'
import Gallery from './components/Gallery'
import Landing from './components/Landing'
import Comic1 from './assets/comics/Comic1.PNG'
import Comic2 from './assets/comics/Comic2.JPG'
import Comic3 from './assets/comics/Comic3.PNG'
import Comic4 from './assets/comics/Comic4.PNG'
import Comic5 from './assets/comics/Comic5.JPG'
import Comic6 from './assets/comics/Comic6.PNG'
import Comic7 from './assets/comics/Comic7.PNG'
import Comic8 from './assets/comics/Comic8.JPG'
import Comic9 from './assets/comics/Comic9.JPG'
import Illustration1 from './assets/inkIllustrations/Illustration1.JPG'
import Illustration2 from './assets/inkIllustrations/Illustration2.JPG'
import Illustration3 from './assets/inkIllustrations/Illustration3.JPG'
import Illustration4 from './assets/inkIllustrations/Illustration4.JPG'
import Illustration5 from './assets/inkIllustrations/Illustration5.JPG'
import Illustration6 from './assets/inkIllustrations/Illustration6.JPG'
import Illustration7 from './assets/inkIllustrations/Illustration7.JPG'
import Illustration8 from './assets/inkIllustrations/Illustration8.JPG'
import Illustration9 from './assets/inkIllustrations/Illustration9.JPG'
import Illustration10 from './assets/inkIllustrations/Illustration10.JPG'
import Soar1 from './assets/storyboards/soar/Soar1.JPG'
import Soar2 from './assets/storyboards/soar/Soar2.JPG'
import Soar3 from './assets/storyboards/soar/Soar3.JPG'
import Soar4 from './assets/storyboards/soar/Soar4.JPG'
import Soar5 from './assets/storyboards/soar/Soar5.JPG'
import Soar6 from './assets/storyboards/soar/Soar6.JPG'
import Soar7 from './assets/storyboards/soar/Soar7.JPG'
import Soar8 from './assets/storyboards/soar/Soar8.JPG'
import Soar9 from './assets/storyboards/soar/Soar9.JPG'
import Soar10 from './assets/storyboards/soar/Soar10.JPG'
import Soar11 from './assets/storyboards/soar/Soar11.JPG'
import Soar12 from './assets/storyboards/soar/Soar12.JPG'
import Soar13 from './assets/storyboards/soar/Soar13.JPG'
import Soar14 from './assets/storyboards/soar/Soar14.JPG'
import Soar15 from './assets/storyboards/soar/Soar15.JPG'
import NightDrive1 from './assets/storyboards/nightDrive/NightDrive1.JPG'
import NightDrive2 from './assets/storyboards/nightDrive/NightDrive2.JPG'
import NightDrive3 from './assets/storyboards/nightDrive/NightDrive3.JPG'
import NightDrive4 from './assets/storyboards/nightDrive/NightDrive4.JPG'
import NightDrive5 from './assets/storyboards/nightDrive/NightDrive5.JPG'
import NightDrive6 from './assets/storyboards/nightDrive/NightDrive6.JPG'
import NightDrive7 from './assets/storyboards/nightDrive/NightDrive7.JPG'
import NightDrive8 from './assets/storyboards/nightDrive/NightDrive8.JPG'
import NightDrive9 from './assets/storyboards/nightDrive/NightDrive9.JPG'
import NightDrive10 from './assets/storyboards/nightDrive/NightDrive10.JPG'
import NightDrive11 from './assets/storyboards/nightDrive/NightDrive11.JPG'
import NightDrive12 from './assets/storyboards/nightDrive/NightDrive12.JPG'
import NightDrive13 from './assets/storyboards/nightDrive/NightDrive13.JPG'
import NightDrive14 from './assets/storyboards/nightDrive/NightDrive14.JPG'
import NightDrive15 from './assets/storyboards/nightDrive/NightDrive15.JPG'
import NightDrive16 from './assets/storyboards/nightDrive/NightDrive16.JPG'
import NightDrive17 from './assets/storyboards/nightDrive/NightDrive17.JPG'
import NightDrive18 from './assets/storyboards/nightDrive/NightDrive18.JPG'
import NightDrive19 from './assets/storyboards/nightDrive/NightDrive19.JPG'
import NavBar from './components/NavBar'
import Theater from './components/Theater'
import { BrowserRouter as Router,
	Route, } from 'react-router-dom'
import StoryboardMenu from './components/StoryboardMenu'
import StoryboardCarousel from './components/StoryboardCarousel'
import Contact from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'

const AppContainer = styled.div`
	background-color: #292b2c;
	min-height: 100vh;
	margin: 0 auto;
`


class App extends React.Component {
	landingItems = [
		{ id: 1, title: 'Comics', imgSrc: Comic2, path: '/Comics'},
		{ id: 2, title: 'Ink Illustrations', imgSrc: Illustration1, path: '/InkIllustrations' },
		{ id: 4, title: 'Storyboards', imgSrc: NightDrive1, path: '/Storyboards' },
		{ id: 5, title: 'Night Drive Animation', imgSrc: Comic4, path: '/Animations' },
	]
	animations = [
		{ id: 1, title: 'Night Drive', YouTubeSrc: 'https://www.youtube.com/embed/69PY--NDU5k' },
	]
	state = {
		comics : [
			{ id: 1, title: 'Comic 1', imgSrc: Comic1, },
			{ id: 2, title: 'Comic 2', imgSrc: Comic2, },
			{ id: 3, title: 'Comic 3', imgSrc: Comic3, },
			{ id: 4, title: 'Comic 4', imgSrc: Comic4, },
			{ id: 5, title: 'Comic 5', imgSrc: Comic5, },
			{ id: 6, title: 'Comic 6', imgSrc: Comic6, },
			{ id: 7, title: 'Comic 7', imgSrc: Comic7, },
			{ id: 8, title: 'Comic 8', imgSrc: Comic8, },
			{ id: 9, title: 'Comic 9', imgSrc: Comic9, },
		],
		inkIllustrations : [
			{ id: 1, title: 'Illustration 1', imgSrc: Illustration1, },
			{ id: 2, title: 'Illustration 2', imgSrc: Illustration2, },
			{ id: 3, title: 'Illustration 3', imgSrc: Illustration3, },
			{ id: 4, title: 'Illustration 4', imgSrc: Illustration4, },
			{ id: 5, title: 'Illustration 5', imgSrc: Illustration5, },
			{ id: 6, title: 'Illustration 6', imgSrc: Illustration6, },
			{ id: 7, title: 'Illustration 7', imgSrc: Illustration7, },
			{ id: 8, title: 'Illustration 8', imgSrc: Illustration8, },
			{ id: 9, title: 'Illustration 9', imgSrc: Illustration9, },
			{ id: 10, title: 'Illustration 10', imgSrc: Illustration10, },
		],
		storyboardMenuItems : [
			{ title: 'Night Drive', iconImage: NightDrive1, path: '/NightDrive', color: 'red' },
			{ title: 'Soar', iconImage: Soar1, path: '/Soar', color: 'green' },
		],
		nightDriveBoard : [
			{ id: 1, title: 'Night Drive 1', imgSrc: NightDrive1, },
			{ id: 2, title: 'Night Drive 2', imgSrc: NightDrive2, },
			{ id: 3, title: 'Night Drive 3', imgSrc: NightDrive3, },
			{ id: 4, title: 'Night Drive 4', imgSrc: NightDrive4, },
			{ id: 5, title: 'Night Drive 5', imgSrc: NightDrive5, },
			{ id: 6, title: 'Night Drive 6', imgSrc: NightDrive6, },
			{ id: 7, title: 'Night Drive 7', imgSrc: NightDrive7, },
			{ id: 8, title: 'Night Drive 8', imgSrc: NightDrive8, },
			{ id: 9, title: 'Night Drive 9', imgSrc: NightDrive9, },
			{ id: 10, title: 'Night Drive 10', imgSrc: NightDrive10, },
			{ id: 11, title: 'Night Drive 11', imgSrc: NightDrive11, },
			{ id: 12, title: 'Night Drive 12', imgSrc: NightDrive12, },
			{ id: 13, title: 'Night Drive 13', imgSrc: NightDrive13, },
			{ id: 14, title: 'Night Drive 14', imgSrc: NightDrive14, },
			{ id: 15, title: 'Night Drive 15', imgSrc: NightDrive15, },
			{ id: 16, title: 'Night Drive 16', imgSrc: NightDrive16, },
			{ id: 17, title: 'Night Drive 17', imgSrc: NightDrive17, },
			{ id: 18, title: 'Night Drive 18', imgSrc: NightDrive18, },
			{ id: 19, title: 'Night Drive 19', imgSrc: NightDrive19, },
		],
		soarBoard : [
			{ id: 1, title: 'Soar 1', imgSrc: Soar1, },
			{ id: 2, title: 'Soar 2', imgSrc: Soar2, },
			{ id: 3, title: 'Soar 3', imgSrc: Soar3, },
			{ id: 4, title: 'Soar 4', imgSrc: Soar4, },
			{ id: 5, title: 'Soar 5', imgSrc: Soar5, },
			{ id: 6, title: 'Soar 6', imgSrc: Soar6, },
			{ id: 7, title: 'Soar 7', imgSrc: Soar7, },
			{ id: 8, title: 'Soar 8', imgSrc: Soar8, },
			{ id: 9, title: 'Soar 9', imgSrc: Soar9, },
			{ id: 10, title: 'Soar 10', imgSrc: Soar10, },
			{ id: 11, title: 'Soar 11', imgSrc: Soar11, },
			{ id: 12, title: 'Soar 12', imgSrc: Soar12, },
			{ id: 13, title: 'Soar 13', imgSrc: Soar13, },
			{ id: 14, title: 'Soar 14', imgSrc: Soar14, },
			{ id: 15, title: 'Soar 15', imgSrc: Soar15, },
		],
	}

	render() {
		return (
			<Router>
				<NavBar />
				<AppContainer>
					<switch>
					 <Route exact path='/'>
							<Landing images={this.landingItems}/>
						</Route>
						<Route exact path='/Comics'>
							<Gallery images={this.state.comics}/>
						</Route>
						<Route path='/InkIllustrations'>
							<Gallery images={this.state.inkIllustrations}/>
						</Route>
						<Route path='/Animations'>
							<Theater animations={this.animations}/>
						</Route>
						<Route path='/Storyboards'>
							<StoryboardMenu storyboardMenuItems={this.state.storyboardMenuItems}/>
						</Route>
						<Route path='/NightDrive'>
							<StoryboardCarousel  storyboards = {this.state.nightDriveBoard}/>
						</Route>
						<Route path='/Soar'>
							<StoryboardCarousel storyboards = {this.state.soarBoard}/>
						</Route>
						<Route path='/Contact'>
							<Contact />
						</Route>
					</switch>
				</AppContainer>
			</Router>   
		);
	}
}

export default App;


