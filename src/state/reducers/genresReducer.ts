import { Action } from '../actions';
import { ActionType } from '../action-types';

interface GenresState {
    loading: boolean;
    error: string | null;
    data: string[];
    selected: string | null;
}

const initialState = {
    data: [],
    error: null,
    loading: false,
    selected: null,
};

const genreReducer = (
    state: GenresState = initialState,
    action: Action
): GenresState => {
    switch (action.type) {
        case ActionType.GET_GENRES:
            return {
                ...state,
                data: [],
                error: null,
                loading: true,
            };
        case ActionType.GET_GENRES_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null,
                loading: false,
            };
        case ActionType.GET_GENRES_ERROR:
            return {
                ...state,
                data: [],
                error: action.payload,
                loading: false,
            };
        case ActionType.SET_GENRE:
            return { ...state, error: null, loading: true };
        case ActionType.SET_GENRE_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                selected: action.payload,
            };
        case ActionType.SET_GENRE_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
                selected: null,
            };
        default:
            return state;
    }
};

export default genreReducer;
