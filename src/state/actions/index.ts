import { ActionType } from '../action-types';

// TODO: Create central source of reused interfaces
interface GetEventsAction {
    type: ActionType.GET_EVENTS;
}

interface GetEventsSuccessAction {
    type: ActionType.GET_EVENTS_SUCCESS;
    payload: [];
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

interface GetMetroAreasAction {
    type: ActionType.GET_METRO_AREAS;
}

interface GetMetroAreasSuccessAction {
    type: ActionType.GET_METRO_AREAS_SUCCESS;
    payload: string[];
}

interface GetMetroAreasErrorAction {
    type: ActionType.GET_METRO_AREAS_ERROR;
    payload: string;
}

interface SetGenreAction {
    type: ActionType.SET_GENRE;
}

interface SetGenreSuccessAction {
    type: ActionType.SET_GENRE_SUCCESS;
    payload: string;
}

interface SetGenreErrorAction {
    type: ActionType.SET_GENRE_ERROR;
    payload: string;
}

interface SetMetroAreaAction {
    type: ActionType.SET_METRO_AREA;
}

interface SetMetroAreaSuccessAction {
    type: ActionType.SET_METRO_AREA_SUCCESS;
    payload: string;
}

interface SetMetroAreaErrorAction {
    type: ActionType.SET_METRO_AREA_ERROR;
    payload: string;
}

export type Action =
    | GetEventsAction
    | GetEventsSuccessAction
    | GetEventsErrorAction
    | GetGenresAction
    | GetGenresSuccessAction
    | GetGenresErrorAction
    | GetMetroAreasAction
    | GetMetroAreasSuccessAction
    | GetMetroAreasErrorAction
    | SetGenreAction
    | SetGenreSuccessAction
    | SetGenreErrorAction
    | SetMetroAreaAction
    | SetMetroAreaSuccessAction
    | SetMetroAreaErrorAction;
