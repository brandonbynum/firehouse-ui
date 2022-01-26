import { ActionType } from '../action-types';

interface GetEventsAction {
    type: ActionType.GET_EVENTS;
}

interface GetEventsSuccessAction {
    type: ActionType.GET_EVENTS_SUCCESS;
    payload: string[];
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
