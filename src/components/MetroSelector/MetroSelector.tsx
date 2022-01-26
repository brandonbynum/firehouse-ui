import React, { useEffect, useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import Selector from '../Shared/Selector/Selector';

import './metroSelector.scss';

const MetroSelector = () => {
    const { getMetroAreas } = useActions();
    const { data, error, loading } = useTypedSelector(
        (state) => state.metroAreas
    );
    const [selectedMetro, setSelectedMetro] = useState('Phoenix');
    const title = { top: '📍', bottom: selectedMetro };

    const handleSelection = (metroName: string) => {
        setSelectedMetro(metroName);
    };

    useEffect(() => {
        getMetroAreas();
    }, []);

    useEffect(() => {
        console.log(selectedMetro);
    }, [selectedMetro]);

    return (
        <Selector
            buttonTitle={title}
            handleOption={handleSelection}
            listOptions={data}
            selected={selectedMetro}
        />
    );
};

export default MetroSelector;
