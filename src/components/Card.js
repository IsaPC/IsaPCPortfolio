import React from 'react'
import {Link} from 'gatsby'
import Img from "gatsby-image"
// import Dump from './Dump'

// styling
import cardStyles from "../CSS/card.module.css"


/// MAIN FUNCTION ///
const Card = ({project}) => {
   // get the segmented data prom projects
   const {title, datePublished, dateEdited} = project.frontmatter;
   const { slug } = project.fields;
   const image = project.frontmatter.image.childImageSharp.fluid

    // const img = post.frontmatter.image
    const Edited = () => {
        if (dateEdited != null) {
            return <p className={cardStyles.date}>last edited: {dateEdited}</p>
        }
        return null
    }



    return ( 
        <div className={cardStyles.card}>
            <Link to={slug}>
                <Img  fluid={image} />
                <h1 className={cardStyles.title}>{title}</h1>
                <p className={cardStyles.date}>published: {datePublished}</p>
                <Edited/>
            </Link>

        </div>
     );
}
 



export default Card;