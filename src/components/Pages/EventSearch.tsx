import React, { useEffect, useRef, useState } from 'react';

import EventList from '../EventsList/EventList';
import MetroSelector from '../MetroSelector/MetroSelector';
import SearchButton from '../SearchButton/SearchButton';

import './eventSearch.scss';

const EventSearch = () => {
    const [eventListHeight, setEventListHeight] = useState(0);
    const searchRef = useRef<any>(null);

    // TODO: Hook to get page-content margin height
    // TODO: Hook to get metro selector full height (offsetHeight + marginTop + marginBottom)
    // TODO: Hook to get heder height
    useEffect(() => {
        console.log(`searchOffsetHeight: ${searchRef.current.offsetHeight}`);
        const searchElemHeight = searchRef.current.offsetHeight;
        const metroSelectorHeight = 0;
        const pageContentHeight = 0;
        const newEventListHeight =
            window.innerHeight -
            searchElemHeight -
            metroSelectorHeight -
            pageContentHeight;

        console.log(newEventListHeight);
        setEventListHeight(newEventListHeight);
    }, [searchRef.current]);

    return (
        <div className="">
            <div className="position-static mb-3">
                <MetroSelector />
            </div>

            {/* 
                TODO: Add button to scroll back to top of list
                TODO: Gradient to overflow visibility on Y axis
            */}
            <div
                className="event-container mb-3"
                style={{
                    // height: `${eventListHeight}`
                    height: '600px',
                }}
            >
                <EventList />
            </div>

            {/* 
                TODO: 
                    - Show tooltip on hover if button is disabled 
                    - If clicked while disabled, highlight metro border red
            */}
            <div className="sticky-bottom" ref={searchRef}>
                <SearchButton />
            </div>
        </div>
    );
};

export default EventSearch;
