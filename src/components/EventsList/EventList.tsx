import React, { useEffect } from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import './eventList.scss';

const EventList = () => {
    const { data, loading, error } = useTypedSelector((state) => state.events);

    return (
        <Table className="events-list rounded bg-light">
            <tbody>
                {data.length > 0 &&
                    data.map((event, eventIndex: number) => {
                        return (
                            <tr
                                className="text-white border-dark"
                                key={`event-${eventIndex}`}
                            >
                                <td className="p-3">
                                    {data[eventIndex].artists.map(
                                        (artist, artistIndex: number) => {
                                            return (
                                                <div
                                                    key={`${event.event_id}-artist-${artistIndex}`}
                                                >
                                                    {artist.is_headliner ? (
                                                        <h3>{artist.name}</h3>
                                                    ) : (
                                                        <small>
                                                            {artist.name}
                                                        </small>
                                                    )}
                                                </div>
                                            );
                                        }
                                    )}
                                </td>
                                <td className="p-3">
                                    <div>{event.date}</div>
                                    <div>{event.venue.name}</div>
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
        </Table>
    );
};

export default EventList;
