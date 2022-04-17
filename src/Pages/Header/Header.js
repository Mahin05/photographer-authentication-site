import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'


const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
      };
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className='bg-set'>
            <Container>
                <Navbar.Brand as={Link} to="/">Photographer Mahin</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='text-white' href="home#services">Services</Nav.Link>
                        <Nav.Link  className='text-white' as={Link}  to="/blogs">Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className='text-white'  as={Link} to="about">About me</Nav.Link>
                        {user ? <button onClick={logout} className='btn btn-link text-white text-decoration-none'>Signout</button> :<Nav.Link  className='text-white'  as={Link} to="login">
                            Login
                        </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;