import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

import useIsLoading from '../../../hooks/useIsLoading';

const Loader = () => {
    const isLoading = useIsLoading();
    return (
        <React.Fragment>
            {isLoading && <LinearProgress color="inherit" />}
        </React.Fragment>
    );
};

export default Loader;
