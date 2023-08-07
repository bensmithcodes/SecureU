import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/map_line_connection.mp4" autoPlay muted />
			<Container>
				<MainHeading>IT Security Just for U</MainHeading>
				<HeroText>
					The best innovative security systems located around the Globe.
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
						<Button>Let's Get Started</Button>
					</Link>
					<HeroButton>Find Out More</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
