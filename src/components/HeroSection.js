import React from 'react'


const HeroSection = (props) => {
    
    const sendDataToParent = (event) => {
        props.passH3OnClick(event.target.getAttribute('data-h3')) 
    }
    const sendData = (event) => {
        props.passDataOnClick(event.target.getAttribute('data')) 
    }

    return (
        <section className="full-width hero">
	<div className="page-wrapper">
		<h1>Engineering Management MSc online </h1>
		<p> Build on your experience. Learn to lead. Secure your future. </p>
			<div className="cta-wrapper">				
				<a id="interested"  className="eligibility" href="#cta"> <div onClick={(event) => {sendDataToParent(event);sendData(event)}} data="IA200364" data-h3="Please enter your details to download the Engineering Management MSc brochure." className="cta1 cta-1 cta-btn">Download Brochure</div>	</a>		
				<a    id="eligible"   className="requestCall" href="#cta"><div onClick={(event) => sendDataToParent(event)}  data="IA200365" data-h3="Please enter your details to begin the application process." className="cta2 cta-2 cta-btn ">	Apply now </div></a>			
				<a  id="started"   className="eligibility" href="#cta">		<div onClick={(event) => sendDataToParent(event)} data="IA200366" data-h3="Please enter your details to begin the application process." className="cta3 cta-3 cta-btn">Request a call </div> </a>	
                		
			<div className="clearifx"></div>
		</div>
	</div> 
</section>
    )
}

export default HeroSection