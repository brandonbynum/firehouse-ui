import React from 'react';
import { Alert } from 'react-bootstrap';

import { useErrorMessages } from 'hooks/useErrorMessages';

const Error = () => {
    const errors = useErrorMessages();

    return (
        <div>
            {errors.map((error, index) => {
                return (
                    <Alert key={`message-${index}`} variant="danger">
                        {error.message}
                    </Alert>
                );
            })}
        </div>
    );
};

export default Error;
