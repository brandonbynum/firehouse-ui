import React from 'react';

import { Container, Navbar } from 'react-bootstrap';
import './Header.scss';

const Header = () => {
    return (
        <Navbar className="header bg-primary">
            <Container>
                <Navbar.Brand className="mx-auto" href="#home">
                    <div className="text-center">🔥🏠</div>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Header;
