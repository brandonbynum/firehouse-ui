// External packages
import React from 'react';
import { Provider } from 'react-redux';

// Hooks & Utiilities
import { store } from '../../state/store';

// Components
import Error from '../Shared/Error/Error';
import EventSearch from '../Pages/EventSearch/EventSearch';
import Header from '../Header/Header';
import Loader from '../Shared/Loader/Loader';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const App = () => {
    return (
        <Provider store={store}>
            <div className="app text-light bg-dark vh-100 overflow-hidden">
                <div className="sticky-top">
                    <Header />
                    <Loader />
                </div>

                <div id="page-content" className="mx-auto p-3">
                    <Error />
                    <EventSearch />
                </div>
            </div>
        </Provider>
    );
};

export default App;
