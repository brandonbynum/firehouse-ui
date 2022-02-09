import React from 'react';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import Selector from '../Shared/Selector/Selector';

import './genreSelector.scss';

const GenreSelector = () => {
    const { getGenres, setGenre } = useActions();
    const { data, selected } = useTypedSelector((state) => state.genres);

    const title = {
        top: 'Genre',
        bottom: selected ? selected : 'None',
    };

    const handleGenreClick = (genre_name: string) => {
        setGenre(genre_name);
    };

    return (
        <Selector
            buttonTitle={title}
            closeOnSelection={true}
            fetchOptions={getGenres}
            handleOption={handleGenreClick}
            listOptions={data}
            selected={selected}
        />
    );
};

export default GenreSelector;
