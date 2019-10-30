import React from 'react'


const MobileNavWrapper = (props) => {
    return (
        <section id="mobile-navigation" className="full-width main-menu-mobile sticky-mobile">
	<header className="page-wrapper">
		<div className="mobile-logo">							
		</div>	
			<div className="mobile-menu">
					<nav className="mobile-nav-wrap" role="navigation">
							<ul className="mobile-header-nav">
								  <li><a href="#globalmba" >COURSE CONTENT</a></li>
								  <li><a href="#brunel">PATHWAYS </a></li>
								  <li><a href="#about">COURSE TUTOR </a></li>
								   <li><a href="#entry">LEARNING OUTCOMES</a></li>
							</ul>
					</nav>
						{props.children}
			</div>
	    </header>
    </section>
    )
}

export default MobileNavWrapper