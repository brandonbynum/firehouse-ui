import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import { useAppDispatch } from './useAppDispatch';

export const useActions = () => {
    const dispatch = useAppDispatch();
    return bindActionCreators(actionCreators, dispatch);
};
