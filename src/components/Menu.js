import React from 'react'


const Menu = (props) => {
    return (
        <div className="nav">
			
			<a id="t-testimonial" href="#globalmba" className="item">
				{props.menu1}
			</a>
			<a id="t-salaries" href="#career" className="item">
            {props.menu2}
			</a>
			<a id="t-skills" href="#testimonials" className="item">
            {props.menu3}
			</a>
			<a id="t-about" href="#skills" className="item">
			{props.menu4}
			</a>			
			 <a style={{display: 'none'}} id="nav-cta" href="#field1"  className="item">Apply Now</a> 		
		</div>
    )
}

export default Menu