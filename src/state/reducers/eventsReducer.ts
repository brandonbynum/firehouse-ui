import { Action } from '../actions';
import { ActionType } from '../action-types';

interface EventsState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const initialState = {
    loading: false,
    error: null,
    data: [],
};

const eventsReducer = (
    state: EventsState = initialState,
    action: Action
): EventsState => {
    switch (action.type) {
        case ActionType.GET_EVENTS:
            return { loading: true, error: null, data: [] };
        case ActionType.GET_EVENTS_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case ActionType.GET_EVENTS_ERROR:
            return { loading: false, error: action.payload, data: [] };
        default:
            return state;
    }
};

export default eventsReducer;
