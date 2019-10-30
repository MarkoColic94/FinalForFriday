import React from 'react'
import AboutBUL from '../img/brunel-about-brunel-public-health.jpg'

const AboutBrunel = () => {
    const hrefStyle = {
        color : '#00325b', 
        textDecoration: 'none', 
        borderBottom:'1px solid #00325b'
    }

    return (
    <section id="brunel" class="about full-width white">
	<div class="page-wrapper">
			<h2>About Brunel University London</h2>
			
			<div class="one-sixty">
			
						<img class="rounded" src={AboutBUL} alt="Brunel"/>
			</div>
			<div class="one-fourty">			
				<p>Brunel University London takes its name from one of Britain’s most influential engineers, Isambard Kingdom Brunel. Our alumni continue to follow in his footsteps in the field of civil engineering, as well as working across manufacturing, service, and government sectors globally. Brunel’s 'International Outlook' is recognised as amongst the best in the world, ranked 34th in the 2020 <a style={hrefStyle} href="https://www.timeshighereducation.com/world-university-rankings" target="_blank">Times Higher Education World University Rankings</a>, and we are  dedicated to helping you develop the academic and personal skills needed for success in the real world. </p>
					
			</div>
			<div class="clearfix"></div>
	</div>
</section>
    )
}

export default AboutBrunel