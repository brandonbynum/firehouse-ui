import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const getEvents = (genre: string = '', metroArea: string = '') => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.GET_EVENTS,
        });

        try {
            const url: string = process.env.REACT_APP_API_URL + 'events';
            const { data } = await axios.get(url, {
                params: {
                    genre: genre,
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
            type: ActionType.GET_METRO_AREA,
        });

        try {
            const url: string = process.env.REACT_APP_API_URL + 'metropolitans';
            const { data } = await axios.get(url);
            console.log(data.data);
            const names = data.data.map(
                (metroArea: { id: number; name: string }) => {
                    return metroArea.name;
                }
            );

            dispatch({
                type: ActionType.GET_METRO_AREA_SUCCESS,
                payload: names,
            });
        } catch (err: any) {
            dispatch({
                type: ActionType.GET_METRO_AREA_ERROR,
                payload: err.message,
            });
        }
    };
};
