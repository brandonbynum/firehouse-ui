// External packages
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

// Hooks & Utiilities
import { store } from '../../state/store';

// Components
import EventList from '../EventsList/EventList';
import Error from '../Shared/Error/Error';
import GenreSelector from '../GenreSelector/GenreSelector';
import Header from '../Header/Header';
import Loader from '../Shared/Loader/Loader';
import MetroSelector from '../MetroSelector/MetroSelector';
import SearchButton from '../SearchButton/SearchButton';
import './App.scss';

const App = () => {
    return (
        <Provider store={store}>
            <div className="app text-light vh-100 bg-secondary">
                <Loader />
                <Header />
                <div className="p-3">
                    <Error />
                    <Row className="mb-3">
                        <Col xs={6} className="">
                            <GenreSelector />
                        </Col>
                        <Col xs={6} className="">
                            <MetroSelector />
                        </Col>
                    </Row>
                    <SearchButton />
                    <EventList />
                </div>
            </div>
        </Provider>
    );
};

export default App;
