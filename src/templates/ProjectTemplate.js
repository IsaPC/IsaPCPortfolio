import React from 'react'
import Layout from '../components/Layout'
import {Link} from 'gatsby' 
import {graphql} from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import styled from 'styled-components'

const ContentStyle = styled.main`
max-width: 80%;
margin: 0 auto;
`


const ProjectTemplate = ({data, pageContext }) => {
    const {body} = data.mdx
    const {next, previous} = pageContext;


    const NavPage = ({item}) => {
        if (item == null) {
            return <div className="noLink" />
        } else {
            return (
                <div className="hasLink">
                    <Link to={item.fields.slug}>
                        <p>{item.frontmatter.title}</p>
                    </Link>
                </div>
            )
        }
    }

    return ( 
        <Layout>
            <ContentStyle>
                <MDXRenderer>{body}</MDXRenderer>

                <NavPage item={next}/>
                <NavPage item={previous}/>
            </ContentStyle>
        </Layout>
    );
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`
 
export default ProjectTemplate;