import React, { useEffect, useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './selector.scss';
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
                <div id="list-overlay">
                    {/* 
                        TODO: Fade to new color on hover
                        TODO: Upon option hover, fade to new color
                    */}
                    <div className="mx-auto p-3" id="list-table">
                        <ListGroup className="">
                            <ListGroup.Item
                                className={`option pointer p-3 text-primary text-center hover-dark bg-danger`}
                                key={`option-exit`}
                                onClick={handleShowOptions}
                            >
                                &times;
                            </ListGroup.Item>
                            {listOptions.map((name: string, index: number) => {
                                return (
                                    <ListGroup.Item
                                        className={`option pointer p-3 text-primary text-center hover-dark
                                            ${
                                                selected === name
                                                    ? 'bg-dark'
                                                    : 'bg-light'
                                            }`}
                                        key={`option-${index}`}
                                        onClick={() => handleOptionClick(name)}
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
