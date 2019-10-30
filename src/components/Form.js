import React from 'react'


class Form extends React.Component {

    state = {
        formsrc : "IA200364"
    }
    
    componentDidMount() {
        this.setState({formsrc: this.props.ReceivedData})
        const s = document.createElement('script')
        const pc = document.createElement('script')
        const w = document.querySelector(".form-wrapper")
        const wrapper = document.querySelector(".pfah-wrapper")
        s.async = true
        s.setAttribute(
        "src",
        "https://f.edology.com/sdk.js?hash=IA200364"
        )
        pc.setAttribute(
        "src",
        "https://f.edology.com/parseCookies.js"
        )
        w.appendChild(pc)
        wrapper.appendChild(s);
        
        
    }
    
    render() {
        return (
            <section id="cta" class="about full-width white">
	        <div style={{textAlign: "center"}} class="page-wrapper">
			<h2>Take the next step</h2>
				<div class="form-container">
					<div id="field1">
							<h3 class="js-text">{this.props.Receivedh3}</h3>
					<div class="form-wrapper">					
							<div data="https://go.edology.com/l/462002/2019-07-30/p4k8hj" class="pfah-wrapper">
                            </div>
							</div>
					</div>
					</div>
	    </div> 
        </section>
        )
    }
}

export default Form