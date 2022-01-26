import React, { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface IProps {
    buttonTitle: {
        top: string | number;
        bottom: string | number;
    };
    handleOption(name: string): void;
    listOptions: string[];
    selected: string | string[];
}

const Selector = ({
    buttonTitle,
    handleOption,
    listOptions,
    selected,
}: IProps) => {
    const [showOptions, setShowOptions] = useState(false);
    const handleShowOptions = () => setShowOptions(!showOptions);

    return (
        <div className="genre-selector">
            <Button
                style={{ backgroundColor: '#242424', border: 'none' }}
                className="w-100 px-3 text-center"
                onClick={handleShowOptions}
                variant="secondary"
            >
                <div className="mb-0">{buttonTitle.top}</div>
                <small className="text-light-dark">{buttonTitle.bottom}</small>
            </Button>

            {showOptions && (
                <div id="list">
                    <div className="d-flex justify-content-end p-4 mb-3">
                        <Button
                            className="close-list"
                            onClick={handleShowOptions}
                        >
                            &times;
                        </Button>
                    </div>

                    <div className="p-3">
                        <ListGroup className="">
                            {listOptions.map((name: string, index: number) => {
                                return (
                                    <ListGroup.Item
                                        className="pointer p-3"
                                        key={`option-${index}`}
                                        onClick={() => handleOption(name)}
                                        variant={
                                            selected.includes(name) ||
                                            selected === name
                                                ? 'success'
                                                : 'dark'
                                        }
                                    >
                                        {name}
                                    </ListGroup.Item>
                                );
                            })}
                        </ListGroup>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Selector;
