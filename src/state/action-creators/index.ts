import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const getEvents = (metroArea: string | null = null) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.GET_EVENTS,
        });

        try {
            const url: string = process.env.REACT_APP_API_URL + 'events';
            const { data } = await axios.get(url, {
                params: {
                    metro: metroArea,
                },
            });

            dispatch({
                type: ActionType.GET_EVENTS_SUCCESS,
                payload: data,
            });
        } catch (err: any) {
            dispatch({
                type: ActionType.GET_EVENTS_ERROR,
                payload: err.message,
            });
        }
    };
};

export const getGenres = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.GET_GENRES,
        });

        try {
            const url: string = process.env.REACT_APP_API_URL + 'genres';
            const { data } = await axios.get(url);
            console.log(data.data);
            const names = data.data.map(
                (genre: { id: number; name: string }) => {
                    return genre.name;
                }
            );

            dispatch({
                type: ActionType.GET_GENRES_SUCCESS,
                payload: names,
            });
        } catch (err: any) {
            dispatch({
                type: ActionType.GET_GENRES_ERROR,
                payload: err.message,
            });
        }
    };
};

export const getMetroAreas = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.GET_METRO_AREAS,
        });

        try {
            const url: string = process.env.REACT_APP_API_URL + 'metropolitans';
            const { data } = await axios.get(url);
            const names = data.data.map(
                (metroArea: { id: number; name: string }) => {
                    return metroArea.name;
                }
            );

            dispatch({
                type: ActionType.GET_METRO_AREAS_SUCCESS,
                payload: names,
            });
        } catch (err: any) {
            dispatch({
                type: ActionType.GET_METRO_AREAS_ERROR,
                payload: err.message,
            });
        }
    };
};

export const setMetroArea = (metroArea: string = '') => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_METRO_AREA,
        });

        try {
            dispatch({
                type: ActionType.SET_METRO_AREA_SUCCESS,
                payload: metroArea,
            });
        } catch (err: any) {
            dispatch({
                type: ActionType.SET_METRO_AREA_ERROR,
                payload: err.message,
            });
        }
    };
};

export const setGenre = (genre: string = '') => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_GENRE,
        });

        try {
            dispatch({
                type: ActionType.SET_GENRE_SUCCESS,
                payload: genre,
            });
        } catch (err: any) {
            dispatch({
                type: ActionType.SET_GENRE_ERROR,
                payload: err.message,
            });
        }
    };
};
