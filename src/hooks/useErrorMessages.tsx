import { useEffect, useState } from 'react';

import { useTypedSelector } from './useTypedSelector';

interface IError {
    type: string;
    message: string;
}

export const useErrorMessages = () => {
    const state = useTypedSelector((state) => state);
    const [errorMessages, setErrorMessages] = useState<IError[]>([]);

    useEffect(() => {
        const messageList: IError[] = [];
        const stateKeys: any[] = Object.keys(state);

        stateKeys.forEach((errorObj, index) => {
            const keyName: string = stateKeys[index];
            const stateValue = state[keyName as keyof typeof state];

            if (stateValue?.error) {
                messageList.push({
                    type: keyName,
                    message: `Failed to retrieve ${keyName}`,
                });
            }
        });

        setErrorMessages(messageList);
    }, [state]);

    return errorMessages;
};
