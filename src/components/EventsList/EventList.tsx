import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import './eventList.scss';

const EventList = () => {
    const { data, loading, error } = useTypedSelector((state) => state.events);
    const { getEvents } = useActions();

    useEffect(() => {
        getEvents();
    }, []);

    // useEffect(() => {
    //     console.log(data);
    // }, [data]);

    return (
        <div>
            {data.length > 0 &&
                data.map((event, eventIndex: number) => {
                    return (
                        <div
                            className="border m-3 p-3"
                            key={`event-${eventIndex}`}
                        >
                            <div className="mb-2 d-flex justify-content-between">
                                <div>
                                    {data[eventIndex].artists.map(
                                        (artist, artistIndex: number) => {
                                            return (
                                                <div
                                                    key={`${event.event_id}-artist-${artistIndex}`}
                                                >
                                                    {artist.name}{' '}
                                                    {artist.is_headliner &&
                                                        '(H)'}
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                                <div>{event.date}</div>
                            </div>

                            <div className="d-flex justify-content-between">
                                <div>{event.venue.name}</div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default EventList;
