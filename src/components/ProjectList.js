import React from "react"
import Card from "./Card"

import styles from "../CSS/card.module.css"
import styled from 'styled-components'
const ProjectList = ({ projects }) => {
  
  const ContentStyle = styled.main`
  max-width: 80%;
  margin: 0 auto;
  `

  return (
    <section >
      <ContentStyle>
      <div className={styles.projectlist}>
        {projects.map(({ node }, index) => {
          return <Card key={index} project={node} />
        })}
      </div>
      </ContentStyle>

    </section>
  )
}

export default ProjectList
