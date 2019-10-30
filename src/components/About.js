import React from 'react'
import BulPublicHealth from '../img/brunel-public-health.jpg'


const About = () => {
    return (
        <section id="about" class="about full-width gray">

	<div class="page-wrapper">
			<h2>About the programme</h2>
			<p>Develop advanced-level management skills to further your engineering career. This online master’s programme is designed to give practising engineers the managerial skills needed to lead engineering projects to success. Blending academic theory with practical application, the course will provide you with advanced knowledge in finance, operations, systems thinking, and supply chain design and management within the global engineering environment.</p>
			<div class="one-sixty">
			
						<img class="rounded" src={BulPublicHealth} alt="Brunel"/>
			</div>
			<div class="one-fourty">
				<ul class="thelist">
						<h3>Modules</h3>
						<h4>All modules are worth 15 credits</h4>
						<li>Research Methods for Engineering Projects</li>
						<li>Managing People and Organisations</li>
						<li>Project Management</li>
						<li>Systems Modelling and Simulation</li>
						<li>Logistics and Global Supply Chain Management</li>
						<li>Quality Management and Reliability </li>
						<li>Advanced Measurement Systems and Data Analysis</li>
						<li>Financial Management </li>
						<li>Research Project (60 credits)</li>
				</ul>			
			</div>
			<div class="clearfix"></div>
	</div>
</section>
    )
}

export default About