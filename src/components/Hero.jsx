import React from 'react'
import styled from 'styled-components'

const Hero = () => {
  return (
    <StyledHero>
      <div className="content">
        <h1>Hi, I'm Ryan, a <span>React Developer</span> based out of Jacksonville, FL.</h1>
        <StyledCta>
          <a href="#work" className="link-text">
            <div className="block">{'>'}</div>
            <p>View my work</p>
          </a>
        </StyledCta>
        
      </div>
    </StyledHero>
  )
}

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  height: 50vh;
  justify-content: center;

  .content {
    max-width: 60%;
  }

  .content span {
    color: var(--color-accent);
    filter: brightness(200%);
  }
`

const StyledCta = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 170px;
  transition: all 0.2s ease;

  a .block {
    background: var(--color-accent);
    display: flex;
    width: 35px;
    height: 35px;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease;
  }

  &:hover {
    cursor: pointer;

    a .block {
      background: white;
      color: var(--color-accent);
    }

    a p {
      padding-left: 1rem;
    }
  }
`



export default Hero