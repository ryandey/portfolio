import React from 'react'
import styled from 'styled-components'
import myLogo from '../assets/logo.svg'

const Hero = () => {
  return (
    <StyledHero>
      {/* Logo */}
      <StyledLogo>
        <img src={myLogo} alt="Ryan Dey Logo" />
      </StyledLogo>

      {/* CTA */}
      <div className="content">
        <h1>Hi, I'm Ryan, a <span>React Developer</span> based out of Jacksonville, FL.</h1>

        {/* Button */}
        <StyledCta href="#work" className="link-text">
          See my work
        </StyledCta>
      </div>
    </StyledHero>
  )
}

const StyledLogo = styled.div`
  display: flex;
  margin-bottom: 3rem;

  img {
    width: 100px;
  }
`

const StyledHero = styled.main`
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: center;
  align-items: center;

  .content {
    max-width: 60%;
    font-family: 'Rubik', sans-serif;
  }

  .content span {
    color: var(--color-accent);
  }

  .content h1 {
    margin-bottom: 4rem;
  }

  ${StyledLogo} {
    display: none;
  }

  @media screen and (max-width: 1280px) {
    padding: 0 5rem;

    .content {
      max-width: 100%
    }

    .content h1 {
      margin-bottom: 4rem;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0 .5rem; 

    .content h1 {
      font-size: 2.5rem;
      margin-bottom: 4rem;
    }

    .link-text {
      max-width: 100%;
      padding: 1.5rem 2rem;
    }

    ${StyledLogo} {
      display: block;
      margin-top: 10rem;
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
  text-transform: uppercase;

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