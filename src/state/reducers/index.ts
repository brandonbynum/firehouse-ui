import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import genresReducer from './genresReducer';
import metroAreaReducer from './metroAreaReducer';

const reducers = combineReducers({
    events: eventsReducer,
    genres: genresReducer,
    metroAreas: metroAreaReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
