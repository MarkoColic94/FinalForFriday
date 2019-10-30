import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const CourseCard = (props) => {
    console.log(props)
    return (
        <div>
        <li key={props.keyprop}>
        <Link to={`/${props.keyprop}`}>{props.Title}</Link>
        <Img fixed={props.Image}/>
        <p>{props.Subheader}</p>
        </li> 
        </div>
        
         //   <h2>
        //     <Link to={`/${props.keyprop}`}>{props.Title}</Link>
        //   </h2>
        //   <Img fixed={props.Image}/>
        //   <p>{props.Subheader}</p>
        // </li> 
    )
}

export default CourseCard