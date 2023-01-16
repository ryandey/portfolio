import React from 'react'
import styled from 'styled-components'

const Hero = () => {
  return (
    <StyledHero>
      <div className="content">
        <h1>Hi, I'm Ryan, a <span>React Developer</span> based out of Jacksonville, FL.</h1>
        <StyledCta href="#work" className="link-text">
          {'>'} View my work
        </StyledCta>
        
      </div>
    </StyledHero>
  )
}

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: center;

  .content {
    max-width: 60%;
  }

  .content span {
    color: var(--color-accent);
  }

  @media screen and (max-width: 1280px) {
    padding: 0 5rem;

    .content {
      max-width: 100%
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0 1rem; 

    .content h1 {
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 4rem;
    }

    .link-text {
      max-width: 100%;
      padding: 1.5rem 2rem;
    }
  }
`

const StyledCta = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 25%;
  transition: all 0.2s ease;
  background: var(--color-accent);
  padding: .75rem .5rem;

  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
    color: white;
    background-color: var(--color-accent-hover);
    -webkit-box-shadow: 0 10px 35px var(--color-accent-shadow); 
    box-shadow: 0 10px 35px var(--color-accent-shadow);
  }
`



export default Hero