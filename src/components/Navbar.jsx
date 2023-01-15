import styled from 'styled-components'
import myLogo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavContainer>
        {/* Logo */}
        <StyledLogoContainer className="logo">
          <a href="#">
            <StyledLogo src={myLogo} alt="Logo" />
          </a>
        </StyledLogoContainer>

        {/* Links */}
        <StyledLinks>
          <StyledLink href="/">Home</StyledLink>
          <StyledLink href="#work">Work</StyledLink>
          <StyledLink href="#socials">Socials</StyledLink>
        </StyledLinks>

        {/* Contact button */}
        <StyledButtonContainer className="contact">
          <ContactButton>
            Contact
          </ContactButton>
        </StyledButtonContainer>
      </StyledNavContainer>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  position: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
`

const StyledNavContainer = styled.div`
  margin: auto 0;
  display: flex;
  max-width: 1440px;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  margin: auto 0;
`

const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-right: 1rem;
`

const StyledLogo = styled.img`
  width: 55px;
`

const StyledLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 25%;
`

const StyledLink = styled.a`
  font-family: 'Space Mono', monospace;
  text-transform: uppercase;
  padding: 0.5rem 2rem;
`

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 9%;
  max-width: 120px;
`

const ContactButton = styled.button`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: var(--color-accent);
  border: none;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Space Mono', monospace;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
`

export default Navbar