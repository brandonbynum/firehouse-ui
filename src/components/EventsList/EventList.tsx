import React, { useEffect } from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import './eventList.scss';

const EventList = () => {
    const { data, loading, error } = useTypedSelector((state) => state.events);
    console.log(data);
    return (
        <Table id="event-list" className="rounded bg-light">
            <tbody>
                {data.length > 0 &&
                    data.map((event, eventIndex: number) => {
                        return (
                            <tr
                                className="text-white border-dark"
                                key={`event-${eventIndex}`}
                            >
                                <td className="p-3">
                                    <div>{event.artist.name}</div>
                                    <div className="d-flex justify-content-between">
                                        <small className="">{event.date}</small>
                                        <small className="">
                                            {event.venue}
                                        </small>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
        </Table>
    );
};

export default EventList;
