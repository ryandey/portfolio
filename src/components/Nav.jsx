import styled from "styled-components"
import { Home, Briefcase, Share2, Send } from "react-feather"
import myLogo from '../assets/logo.svg'

function Nav() {
  return (
    <StyledNav>
      <StyledList>
        <StyledLogo>
          <a href="#">
            <img src={myLogo} alt="Ryan Dey Logo" />
          </a>
        </StyledLogo>

        {/* Link 1 */}
        <StyledListItem>
          <StyledNavLink href="#">
            <Home size={28} className='icon' />
            <StyledLinkText>Home</StyledLinkText>
          </StyledNavLink>
        </StyledListItem>

        {/* Link 2 */}
        <StyledListItem>
          <StyledNavLink href="#">
            <Briefcase size={28} className='icon' />
            <StyledLinkText>Work</StyledLinkText>
          </StyledNavLink>
        </StyledListItem>

        {/* Link 3 */}
        <StyledListItem>
          <StyledNavLink href="#">
            <Share2 size={28} className='icon' />
            <StyledLinkText>Socials</StyledLinkText>
          </StyledNavLink>
        </StyledListItem>

        {/* Link 4 */}
        <StyledListItem>
          <StyledNavLink href="#" id='contact-button'>
            <Send size={28} className='icon' />
            <StyledLinkText>Contact</StyledLinkText>
          </StyledNavLink>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  )
}

export default Nav

const StyledLinkText = styled.span`
  display: none;
  margin-left: 1rem;
  text-transform: uppercase;
`

const StyledLogo = styled.li`
  margin: 2rem 0 1rem 0;
  text-align: center;
  width: 100%;

  img {
    width: 45px;
  }
`

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

const StyledListItem = styled.li`
  width: 100%;

  &:last-child {
    margin-top: auto;
    background-color: var(--color-accent);
    transition: all 200ms ease;
  }

  #contact-button:hover {
    color: white !important;
    background-color: var(--color-accent-hover) !important;
  }
`

const StyledNavLink = styled.a`
  display: flex;
  align-items: center;
  height: 5rem;
  color: white;
  text-decoration: none;

  .icon:hover {
    color: var(--color-accent);
    filter: opacity(1);
  }

  > * {
    margin: 0 1.5rem;
    width: 2rem;
    min-width: 2rem;
  }

  &:hover {
    color: var(--color-accent);
    background: var(--color-bg-hover);
  }
`

const StyledNav = styled.nav`
  position: fixed;
  background-color: var(--color-bg);
  border-right: 1px solid var(--color-border);
  transition: all 200ms ease;

  /* Small screens */
  @media only screen and (max-width: 748px) {
    bottom: 0;
    width: 100vw;
    height: 5rem;

    ${StyledLogo} {
      display: none;
    }

    ${StyledList} {
      flex-direction: row;
    }

    ${StyledNavLink} {
      justify-content: center;
    }
  }

  /* Large screens */
  @media only screen and (min-width: 748px) {
    top: 0;
    width: 5rem;
    height: 100vh;

    /* Navbar hover */
    &:hover {
      width: 16rem;

      ${StyledLinkText} {
        display: inline;
      }
    }
  }
`