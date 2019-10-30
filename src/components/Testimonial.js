import React from 'react'
import Quotes from '../img/quotes.png'
import StudentImage from '../img/brunel-tutor-engineering-management.png'

const Testimonial = () => {
    return (
        <section id="testimonials" class="full-width white">

	<div class="page-wrapper">
		<div class="one-sixty">
			<div class="testimonial-wrapper">
				<img class="quotes" src={Quotes}/>
				<p class="testimonial">
					"Being the academic lead for the Engineering Management MSc online  is a hugely rewarding experience. This degree is perfect for motivated individuals looking to move their career forward, and become outstanding leaders in engineering industries."
				</p>
			
				<p class="student">Ioannis Dermitzakis (FHEA, FCMI)</p>
				<p class="school">Academic Lead, Engineering Management MSc online</p>
			</div>	
		</div>
		<div class="one-fourty">
			<img class="student-image1" src={StudentImage} />
		</div>
	</div>
	<div class="clearfix"></div>

</section>

    )
}

export default Testimonial