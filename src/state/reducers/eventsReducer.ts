import { Action } from '../actions';
import { ActionType } from '../action-types';

export interface EventsState {
    loading: boolean;
    error: string | null;
    data: IEvent[];
}
interface IArtist {
    name: string;
    is_headliner: boolean;
}
export interface IEvent {
    event_id: number;
    artist: IArtist;
    genre: string[];
    date: string;
    tickets_url: string;
    type: string;
    venue: string;
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
