import React, {useState} from 'react'
import {useStaticQuery, graphql } from 'gatsby';



// TODO: style mdx pahe
// TODO: add projects

// components
import Layout from '../components/Layout' // navigation and footers
import ProjectList from '../components/ProjectList'
import Pagination from '../components/Pagination'

// this is a configured graphql function
const getPostMetadata = graphql`
{
    allMdx(sort: { fields: frontmatter___dateEdited, order: DESC }) {
        edges{
            node{
              fields{
              slug
              }
              frontmatter {
                    title
                    datePublished
                    dateEdited
                    author
                    image {
                        childImageSharp {
                            fluid(maxWidth: 8000, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                          }
                    }
                }
                excerpt
            }
        } 
    }
}
`

const Portfolio = () => {
    // store the data from the graphql staticQuery function
    const response = useStaticQuery(getPostMetadata)
    // simplify the mdx data
    const projects = response.allMdx.edges;

    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;

    const indexOfLastPost = currentPage * projectsPerPage;
    const indexOfFirstPost = indexOfLastPost - projectsPerPage;

    const DisplayProjects = () => {
        if (projects != null) {
            const currentPosts = projects.slice(indexOfFirstPost, indexOfLastPost);
            // console.log(currentPosts);

            if (currentPosts != null) {
                return <div>{currentPosts && <ProjectList projects={currentPosts}/>}</div>
            } else {
                return <p>loading...</p>
            }
        } else {
            return <p>loading...</p>
        }
    }

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const DisplayPageNumbers = () => {
        if (projects != null) {
            return <Pagination postsPerPage={projectsPerPage} totalPosts={projects.length} paginate={paginate}/>
        } else {
            return <p>getting page numbers</p>
        } 
    }

    return (
    <Layout>
        {/* TODO: list all posts */}
        <DisplayProjects />
        <DisplayPageNumbers />
    </Layout>);
}
 
export default Portfolio;