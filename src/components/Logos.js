import React from 'react'
import AccentureLogo from '../img/accenture-logo.png'
import DysonLogo from '../img/dyson-logo.png'
import FortLogo from '../img/fort-logo.png'
import JaguarLogo from  '../img/jaguar-logo.png'
import MicrosoftLogo from '../img/microsoft-logo.png'
import NetworkRailLogo from '../img/networkrail-logo.png'
import TflLogo from '../img/transport-for-london-logo.png' 
import VodafoneLogo from '../img/vodafone-logo.png' 

const Logos = () => {
    return (
        <section id="logos" class="full-width gray info">
	
	<div class="page-wrapper">
			<h2>
				Our graduates work here
			</h2>
			
			
			<div class="logos-wrap">
				<div class="logos-wrap">
							<img class="single-logo" src={AccentureLogo} alt="EY"/>
							<img class="single-logo" src={DysonLogo} alt="EY "/>
							<img class="single-logo" src={FortLogo} alt="EY "/>
							<img class="single-logo" src={JaguarLogo} alt="EY "/>
							<img class="single-logo" src={MicrosoftLogo} alt="EY "/>
							<img class="single-logo" src={NetworkRailLogo} alt="EY "/>
							<img class="single-logo" src={TflLogo} alt="EY "/>
							<img class="single-logo" src={VodafoneLogo} alt="EY "/>					
					</div>	
			
			
			</div>	
			
			<p class="source">Source: <span class="red-text">www.linkedin.com</span></p>
	</div>		
</section>
    )
}

export default Logos