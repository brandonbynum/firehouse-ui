import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import Selector from '../Shared/Selector/Selector';

import './genreSelector.scss';

const GenreSelector = () => {
    const { data, error, loading } = useTypedSelector((state) => state.genres);
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const { getGenres } = useActions();

    const title = {
        top: 'Genres',
        bottom: `selected: ${selectedGenres.length}`,
    };

    const handleGenreClick = (genre: string) => {
        const genreIndex: number = selectedGenres.indexOf(genre);
        setSelectedGenres(
            genreIndex === -1
                ? [genre, ...selectedGenres]
                : selectedGenres.filter((item) => item !== genre)
        );
    };

    useEffect(() => {
        getGenres();
    }, []);

    return (
        <Selector
            buttonTitle={title}
            handleOption={handleGenreClick}
            listOptions={data}
            selected={selectedGenres}
        />
    );
};

export default GenreSelector;
