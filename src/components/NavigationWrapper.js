import React from 'react'


const NavigationWrapper = (props) => {
	
    return (
        <>
            <section id="navigation" className="full-width main-menu sticky">
	    		<header className="page-wrapper">
					<div className="logo">
						<span className="logo-image"></span>				
					</div>
					{props.children}
	    		</header>
    		</section>
        </>
    )
}

export default NavigationWrapper