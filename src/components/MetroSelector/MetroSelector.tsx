import React from 'react';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import Selector from '../Shared/Selector/Selector';
import { EnvironmentOutlined } from '@ant-design/icons';

const MetroSelector = () => {
    const { getMetroAreas, setMetroArea } = useActions();
    const { data, selected } = useTypedSelector((state) => state.metroAreas);
    const title = <EnvironmentOutlined style={{ fontSize: '150%' }} />;

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
