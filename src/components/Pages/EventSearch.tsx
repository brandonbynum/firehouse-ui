import React, { useEffect, useRef, useState } from 'react';

import EventList from '../EventsList/EventList';
import MetroSelector from '../MetroSelector/MetroSelector';
import SearchButton from '../SearchButton/SearchButton';

import './eventSearch.scss';

interface IHeightProps {
    offsetHeight: number;
    marginBottom: number;
    marginTop: number;
}
interface IRefElement {
    current: {
        offsetHeight: number;
        style: {
            marginTop: number;
            marginBottom: number;
        };
    };
}

const EventSearch = () => {
    const [eventContainerHeight, setEventContainerHeight] = useState(0);
    const containerRef = useRef<any>();
    const headerHeight = 56;
    const searchButtonRef = useRef<any>();
    const metroSelectorButtonRef = useRef<any>();

    const getRefElementHeight = (element: IRefElement) => {
        return (
            element.current.offsetHeight +
            element.current.style.marginTop +
            element.current.style.marginBottom
        );
    };

    const calculateEventContainerHeight = () => {
        console.log(`window.innerHeight: ${window.innerHeight}`);
        const containerOffsetTop = containerRef.current.offsetTop;
        console.log(`containerOffsetTop: ${containerOffsetTop}`);
        console.dir(containerRef.current);

        const metroSelectorButtonHeight = getRefElementHeight(
            metroSelectorButtonRef
        );
        console.log(`metroSelectorButtonHeight: ${metroSelectorButtonHeight}`);
        console.dir(metroSelectorButtonRef.current);

        const searchButtonHeight = getRefElementHeight(searchButtonRef);
        console.log(`searchButtonHeight: ${searchButtonHeight}`);
        console.dir(searchButtonRef.current);

        // Page height - header height - metro button total height - search button height
        const newEventContainerHeight =
            window.innerHeight -
            headerHeight -
            containerOffsetTop -
            metroSelectorButtonHeight -
            searchButtonHeight;

        console.log(`newEventContainerHeight: ${newEventContainerHeight}`);
        setEventContainerHeight(newEventContainerHeight);
    };

    useEffect(() => {
        window.addEventListener('resize', () => {
            calculateEventContainerHeight();
        });
        calculateEventContainerHeight();
    }, []);

    return (
        <div ref={containerRef}>
            <div className="position-static mb-3" ref={metroSelectorButtonRef}>
                <MetroSelector />
            </div>

            {/* 
                TODO: Add button to scroll back to top of list
                TODO: Gradient to overflow visibility on Y axis
            */}
            <div
                className="event-container mb-3"
                style={{
                    height: `${eventContainerHeight}px`,
                    //height: '600px',
                }}
            >
                <EventList />
            </div>

            {/* 
                TODO: 
                    - Show tooltip on hover if button is disabled 
                    - If clicked while disabled, highlight metro border red
            */}
            <div className="sticky-bottom" ref={searchButtonRef}>
                <SearchButton />
            </div>
        </div>
    );
};

export default EventSearch;
