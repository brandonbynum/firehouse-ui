import React, { useEffect, useState } from 'react';

import { useTypedSelector } from './useTypedSelector';

const useIsLoading = () => {
    const state = useTypedSelector((state) => state);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const stateKeys: any[] = Object.keys(state);
        let loadingCount = 0;

        stateKeys.forEach((key, index) => {
            const keyName: string = stateKeys[index];
            const stateValue = state[keyName as keyof typeof state];

            if (stateValue?.loading) {
                console.log(stateValue);
                loadingCount += 1;
            }
        });

        setIsLoading(loadingCount > 0);
    }, [state]);

    return isLoading;
};

export default useIsLoading;
