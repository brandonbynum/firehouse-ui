import React from 'react';
import { Button } from 'react-bootstrap';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const SearchButton = () => {
    const { getEvents } = useActions();
    const genre = useTypedSelector((state) => state.genres.selected);
    const metroArea = useTypedSelector((state) => state.metroAreas.selected);
    const isDisabled = !genre || !metroArea;

    return (
        <Button
            className="w-100 mb-3 bg-light"
            disabled={isDisabled}
            onClick={() => getEvents(genre, metroArea)}
            variant="secondary"
        >
            Search
        </Button>
    );
};

export default SearchButton;
