import React from 'react';
import { Button } from 'react-bootstrap';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { SearchOutlined } from '@ant-design/icons';

const SearchButton = () => {
    const { getEvents } = useActions();
    const metroArea = useTypedSelector((state) => state.metroAreas.selected);
    const isDisabled = !metroArea;

    return (
        <Button
            className="w-100 bg-light-dark text-primary  cursor-pointer"
            disabled={isDisabled}
            onClick={() => getEvents(metroArea)}
        >
            <SearchOutlined style={{ fontSize: '150%' }} />
        </Button>
    );
};

export default SearchButton;
