import { Action } from '../actions';
import { ActionType } from '../action-types';

interface MetroAreaState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const initialState = {
    loading: false,
    error: null,
    data: [],
};

const metroAreaReducer = (
    state: MetroAreaState = initialState,
    action: Action
): MetroAreaState => {
    switch (action.type) {
        case ActionType.GET_METRO_AREA:
            return { loading: true, error: null, data: [] };
        case ActionType.GET_METRO_AREA_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case ActionType.GET_METRO_AREA_ERROR:
            return { loading: false, error: action.payload, data: [] };
        default:
            return state;
    }
};

export default metroAreaReducer;
