import React from 'react';
import useIsLoading from '../../../hooks/useIsLoading';

const Loader = () => {
    const isLoading = useIsLoading();
    return (
        <React.Fragment>
            {isLoading && (
                <div id="loader" className="text-white">
                    Loading
                </div>
            )}
        </React.Fragment>
    );
};

export default Loader;