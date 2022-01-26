import { ActionType } from '../action-types';

// TODO: Create central source of reused interfaces
interface IArtist {
    name: string;
    is_headliner: boolean;
}
interface IEvent {
    event_id: number;
    artists: IArtist[];
    genres: string[];
    date: string;
    start_at: string;
    tickets_url: string;
    type: string;
    venue: {
        name: string;
        address: string;
    };
}
interface GetEventsAction {
    type: ActionType.GET_EVENTS;
}

interface GetEventsSuccessAction {
    type: ActionType.GET_EVENTS_SUCCESS;
    payload: IEvent[] | [];
}

interface GetEventsErrorAction {
    type: ActionType.GET_EVENTS_ERROR;
    payload: string;
}

interface GetGenresAction {
    type: ActionType.GET_GENRES;
}

interface GetGenresSuccessAction {
    type: ActionType.GET_GENRES_SUCCESS;
    payload: string[];
}

interface GetGenresErrorAction {
    type: ActionType.GET_GENRES_ERROR;
    payload: string;
}

interface GetMetroAreaAction {
    type: ActionType.GET_METRO_AREA;
}

interface GetMetroAreaSuccessAction {
    type: ActionType.GET_METRO_AREA_SUCCESS;
    payload: string[];
}

interface GetMetroAreaErrorAction {
    type: ActionType.GET_METRO_AREA_ERROR;
    payload: string;
}

export type Action =
    | GetEventsAction
    | GetEventsSuccessAction
    | GetEventsErrorAction
    | GetGenresAction
    | GetGenresSuccessAction
    | GetGenresErrorAction
    | GetMetroAreaAction
    | GetMetroAreaSuccessAction
    | GetMetroAreaErrorAction;
