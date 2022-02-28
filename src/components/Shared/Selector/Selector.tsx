import React, { useEffect, useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface IProps {
    buttonTitle: string | JSX.Element;
    closeOnSelection: boolean;
    fetchOptions: any;
    handleOption(name: string): void;
    listOptions: string[];
    selected: string | null;
}

const Selector = ({
    buttonTitle,
    closeOnSelection = false,
    fetchOptions,
    handleOption,
    listOptions,
    selected,
}: IProps) => {
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [wasFetchOptionsCalled, setWasFetchOptionsCalled] =
        useState<boolean>(false);

    const handleShowOptions = async () => {
        if (listOptions.length > 0) {
            if (wasFetchOptionsCalled) {
                setWasFetchOptionsCalled(false);
            }

            setShowOptions(!showOptions);
        } else {
            await fetchOptions();
            setWasFetchOptionsCalled(true);
        }
    };

    const handleOptionClick = (option: string) => {
        handleOption(option);

        if (closeOnSelection) {
            handleShowOptions();
        }
    };

    useEffect(() => {
        fetchOptions();
    }, []);

    useEffect(() => {
        if (wasFetchOptionsCalled) {
            handleShowOptions();
        }
    }, [wasFetchOptionsCalled]);

    return (
        <div className={`${!buttonTitle && 'py-3'}`}>
            <Button
                className={
                    'w-100 px-3 bg-light-dark text-center text-primary border-none'
                }
                onClick={handleShowOptions}
            >
                <div className={`mb-0 ${selected ? 'py-2' : 'py-1'}`}>
                    {selected ? selected : buttonTitle}
                </div>
            </Button>

            {showOptions && (
                <div id="list">
                    <div className="d-flex justify-content-end p-4 mb-3">
                        <Button
                            className="close-list bg-light text-primary"
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
                                        className="pointer p-3 bg-light text-primary"
                                        key={`option-${index}`}
                                        onClick={() => handleOptionClick(name)}
                                        variant={
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
