import React from 'react'
import BulLeaveLegacy from '../img/brunel-icon-leave-legacy-health.svg'
import BulBiggerPicture from '../img/brunel-icon-skills-bigger-picture-secondary.svg'
import AwarnessPrimary from '../img/brunel-icon-awareness-primary.svg'
import UnderPressure from '../img/brunel-icon-skills-think-under-pressure-secondary.svg'
import ResultsSuccess from '../img/brunel-icon-skills-results-success-primary.svg'
import Leader from  '../img/brunel-icon-skills-leader-secondary.svg'
const SkillsWrapper = () => {
    return (
        <section  id="skills" className="skills full-width gray">

	<div className="page-wrapper">
		<h2>
			Gain the skills to make a difference
		</h2>
		<div className="one-third-m">
			<div className="icon-wrap">
				<img src={BulLeaveLegacy} className="icon" alt="icon"/>
				<p className="title">
					Understand impact & legacy	
				</p>
				<p className="text">
					Develop an appreciation of engineering on people, the environment, and wealth generation within a region or country and on a global level.	
				</p>
			</div>
		</div>
		<div className="one-third-m">
		
			<div className="icon-wrap">
				<img src={BulBiggerPicture} className="icon" alt="icon"/>
				
				<p className="title">
					See the bigger picture		
				</p>
				<p className="text">
					The broader your perspective, the greater your competitive advantage. Learn to see the full picture to drive growth in engineering industries.	
				</p>
			</div>	
		
		</div>
		<div className="one-third-m">
			<div className="icon-wrap">
				<img src={AwarnessPrimary} className="icon" alt="icon"/>
				<p className="title">
					Present alternative solutions
				</p>
				<p className="text">
					Doing things differently leads to innovation. Learn to think outside the box, and inspire innovative solutions for complex engineering problems.	
				</p>
			</div>	
		</div>
		<div className="clearfix"></div>
		<div className="one-third-m">
			<div className="icon-wrap">
				<img src={UnderPressure} className="icon" alt="icon"/>
				<p className="title">
					Think clearly under pressure
				</p>
				<p className="text">
					Top leadership roles come with big responsibility. Learn how to evaluate situations and make smart decisions fast.

				
				</p>
			</div>	
		</div>
		<div className="one-third-m">

			<div className="icon-wrap">
				<img src={ResultsSuccess} className="icon" alt="icon"/>
				<p className="title">
					Steer projects to success	
				</p>
				<p className="text">
				Big projects need clear direction. Learn how to deliver large-scale engineering projects on both a domestic and global scale.
				</p>
			</div>	
		
		</div>
		<div className="one-third-m">
			<div className="icon-wrap">
				<img src={Leader} className="icon" alt="icon"/>
				<p className="title">
					Become an influential leader	
				</p>
				<p className="text">
					Exceptional leaders inspire industries. Learn the skills to devise strategy and communicate big engineering ideas effectively.
				</p>
			</div>	
		</div>
		<div className="clearfix"></div>
	</div>


</section>
    )
}


export default SkillsWrapper  