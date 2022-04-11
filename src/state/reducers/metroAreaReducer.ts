import { Action } from 'state/actions';
import { ActionType } from 'state/action-types';

interface MetroAreaState {
    data: string[];
    error: string | null;
    loading: boolean;
    selected: string | null;
}

const initialState = {
    data: [],
    error: null,
    loading: false,
    selected: null,
};

const metroAreaReducer = (
    state: MetroAreaState = initialState,
    action: Action
): MetroAreaState => {
    switch (action.type) {
        case ActionType.GET_METRO_AREAS:
            return {
                ...state,
                data: [],
                error: null,
                loading: true,
            };
        case ActionType.GET_METRO_AREAS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null,
                loading: false,
            };
        case ActionType.GET_METRO_AREAS_ERROR:
            return {
                ...state,
                data: [],
                error: action.payload,
                loading: false,
            };
        case ActionType.SET_METRO_AREA:
            return {
                ...state,
                error: null,
                loading: false,
            };
        case ActionType.SET_METRO_AREA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                selected: action.payload,
            };
        case ActionType.SET_METRO_AREA_ERROR:
            return {
                ...state,
                error: null,
                loading: false,
                selected: null,
            };
        default:
            return state;
    }
};

export default metroAreaReducer;
