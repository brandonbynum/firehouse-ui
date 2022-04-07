import React, { useEffect, useRef, useState } from 'react';

import { useActions } from '../../../hooks/useActions';
import useIsLoading from '../../../hooks/useIsLoading';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import EventList from '../../EventsList/EventList';
import MetroSelector from '../../MetroSelector/MetroSelector';

import './eventSearch.scss';

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
    const { getEvents } = useActions();
    const { selected } = useTypedSelector((state) => state.metroAreas);
    const loading = useIsLoading();
    const [eventContainerHeight, setEventContainerHeight] = useState(0);
    const containerRef = useRef<any>();
    const headerHeight = 56;
    const metroSelectorButtonRef = useRef<any>();

    const getRefElementHeight = (element: IRefElement) => {
        return (
            element.current.offsetHeight +
            element.current.style.marginTop +
            element.current.style.marginBottom
        );
    };

    const calculateEventContainerHeight = () => {
        const containerOffsetTop = containerRef.current.offsetTop;
        const metroSelectorButtonHeight = getRefElementHeight(
            metroSelectorButtonRef
        );

        // Page height - header height - metro button total height
        const newEventContainerHeight =
            window.innerHeight -
            headerHeight -
            containerOffsetTop -
            metroSelectorButtonHeight;

        setEventContainerHeight(newEventContainerHeight);
    };

    useEffect(() => {
        window.addEventListener('resize', () => {
            calculateEventContainerHeight();
        });
        calculateEventContainerHeight();
    }, []);

    useEffect(() => {
        if (selected) {
            getEvents(selected);
        }
    }, [selected]);

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
                {!loading && <EventList />}
            </div>
        </div>
    );
};

export default EventSearch;
