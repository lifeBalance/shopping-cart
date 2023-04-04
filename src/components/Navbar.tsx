import { Button, Container, Nav, Navbar as NavBarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { CartSVG } from '../assets/CartSVG'

export function Navbar() {
  return (
    <NavBarBs sticky='top' className='bg-white shadow-sm mb-3'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link
            as={NavLink}
            to='/'
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to='/store'
          >
            Store
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to='/about'
          >
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{ width: '3rem', height: '3rem', position: 'relative' }}
          variant='outline-primary'
          className='rounded-circle'
        >
          <CartSVG />
          <div
            className='rounded-circle bg-danger justify-content-center align-items-center'
            style={{ color: 'white', width: '1.5rem', height: '1.5rem', position: 'absolute', bottom: -8, right: -8 }}
          >
            3
          </div>
        </Button>
      </Container>
    </NavBarBs>
  )
}
