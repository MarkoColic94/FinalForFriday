import React from 'React'


const HamburgerMenu = (props) => {
    return (

			<div className="ham-wrapper">
				<span className="explore"> Explore </span>
					<a className="mobile-menu-toggle js-toggle-menu hamburger-menu" href="#">
						<span className="menu-item"></span>
						<span className="menu-item"></span>
						<span className="menu-item"></span>
					</a>
			</div>
    )
}

export default HamburgerMenu