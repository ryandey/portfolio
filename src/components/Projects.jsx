import React from 'react'
import styled from 'styled-components'

function Projects() {
  return (
    <StyledProjects>
      <h2>MY WORK</h2>
    </StyledProjects>
  )
}


const StyledProjects = styled.section`
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: center;
  align-items: center;
`


export default Projects