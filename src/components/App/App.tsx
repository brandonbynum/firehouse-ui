// External packages
import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

// Hooks & Utiilities
import { store } from '../../state/store';

// Components
import Error from '../Shared/Error/Error';
import EventSearch from '../Pages/EventSearch/EventSearch';
import Header from '../Header/Header';
import Loader from '../Shared/Loader/Loader';

import './App.scss';

const App = () => {
    return (
        <Provider store={store}>
            <div className="app text-light bg-dark vh-100 overflow-hidden">
                <div className="sticky-top">
                    <Header />
                </div>

                <div id="page-content" className="mx-auto p-3">
                    <Loader />
                    <Error />
                    <EventSearch />
                </div>
            </div>
        </Provider>
    );
};

export default App;
