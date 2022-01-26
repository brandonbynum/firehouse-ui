import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from '../../state/store';

import EventList from '../EventsList/EventList';
import GenreSelector from '../GenreSelector/GenreSelector';
import Header from '../Header/Header';
import MetroSelector from '../MetroSelector/MetroSelector';

import './App.scss';

const App = () => {
    return (
        <Provider store={store}>
            <div className="app text-light vh-100">
                <Header />
                <Row className="p-3">
                    <Col xs={6} className="">
                        <GenreSelector />
                    </Col>
                    <Col xs={6} className="">
                        <MetroSelector />
                    </Col>
                </Row>
                <EventList />
            </div>
        </Provider>
    );
};

export default App;
