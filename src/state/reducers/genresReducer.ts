import { Action } from '../actions';
import { ActionType } from '../action-types';

interface GenresState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const initialState = {
    loading: false,
    error: null,
    data: [],
};

const genreReducer = (
    state: GenresState = initialState,
    action: Action
): GenresState => {
    switch (action.type) {
        case ActionType.GET_GENRES:
            return { loading: true, error: null, data: [] };
        case ActionType.GET_GENRES_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case ActionType.GET_GENRES_ERROR:
            return { loading: false, error: action.payload, data: [] };
        default:
            return state;
    }
};

export default genreReducer;
