import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import Selector from '../Shared/Selector/Selector';

import './metroSelector.scss';

const MetroSelector = () => {
    const { getMetroAreas, setMetroArea } = useActions();
    const { data, selected } = useTypedSelector((state) => state.metroAreas);
    const title = { top: '📍', bottom: selected ? selected : 'None' };

    const handleMetroClick = (metroName: string) => {
        setMetroArea(metroName);
    };

    return (
        <Selector
            buttonTitle={title}
            closeOnSelection={true}
            fetchOptions={getMetroAreas}
            handleOption={handleMetroClick}
            listOptions={data}
            selected={selected}
        />
    );
};

export default MetroSelector;
