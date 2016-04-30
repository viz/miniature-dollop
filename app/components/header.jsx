import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'

const Header = () => <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <IndexLinkContainer to={{ pathname: '/' }}>
        <a href='#'>Setup</a>
      </IndexLinkContainer>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <LinkContainer to={{ pathname: '/' }}>
      <NavItem eventKey={1} href='#'>Home</NavItem>
    </LinkContainer>
    <LinkContainer to={{ pathname: '/about' }}>
      <NavItem eventKey={2} href='#'>About</NavItem>
    </LinkContainer>
  </Nav>
</Navbar>

export default Header
