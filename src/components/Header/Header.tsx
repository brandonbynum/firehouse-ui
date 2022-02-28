import React from 'react';

import { Container, Navbar } from 'react-bootstrap';
import { FireFilled, HomeFilled } from '@ant-design/icons';

const Header = () => {
    return (
        <Navbar className="header bg-light-dark">
            <Container>
                <Navbar.Brand className="mx-auto" href="#home">
                    <div className="text-center text-primary">
                        <FireFilled />
                        <HomeFilled />
                    </div>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Header;
