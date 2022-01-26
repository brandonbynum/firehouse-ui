import React from 'react';

import { Container, Navbar } from 'react-bootstrap';
import './Header.scss';

const Header = () => {
    return (
        <Navbar className="header">
            <Container>
                <Navbar.Brand className="mx-auto" href="#home">
                    <div className="text-center">🔥🏠</div>
                    {/* <div className="text-light">[fire]HOUSE</div> */}
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Header;
