import React from 'react';
import { Badge, Col, Row } from 'react-bootstrap';
import { useTypedSelector } from 'hooks/useTypedSelector';
import './eventList.scss';

const EventList = () => {
    const { data } = useTypedSelector((state) => state.events);
    const { selected } = useTypedSelector((state) => state.metroAreas);

    return (
        <div id="event-list" className="rounded-4">
            {selected && data.length === 0 ? (
                <div className="w-100 text-primary text-center">
                    No events found
                </div>
            ) : (
                data.map((event, eventIndex: number) => {
                    const date = event.end_date
                        ? `${event.date} - ${event.end_date}`
                        : event.date;

                    return (
                        <div
                            className="event-summary text-white mb-3 p-3 bg-light hover-dark rounded"
                            key={`event-${eventIndex}`}
                        >
                            <a
                                className="text-decoration-none"
                                href={event.tickets_url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Row>
                                    <Col xs={7}>
                                        <h4>{event.artist.name}</h4>
                                    </Col>
                                    <Col
                                        xs={5}
                                        className="d-flex justify-content-end"
                                    >
                                        <h6>{date}</h6>
                                    </Col>
                                </Row>
                                {event.event_name !== event.artist.name && (
                                    <Row className="my-1">
                                        <Col xs={12}>
                                            <small>{event.event_name}</small>
                                        </Col>
                                    </Row>
                                )}
                                <div className="mb-1">
                                    <small>{event.venue}</small>
                                </div>

                                <Row className="">
                                    <Col xs={12} className="">
                                        {/* Create a set of badges to map */}
                                        {event.artist.headliner && (
                                            <Badge
                                                bg="dark"
                                                className="mx-1  align-middle py-auto"
                                            >
                                                Headliner
                                            </Badge>
                                        )}

                                        {event.type.toLowerCase() ===
                                            'festival' && (
                                            <Badge
                                                bg="dark"
                                                className="mx-1  align-middle py-auto"
                                            >
                                                Festival
                                            </Badge>
                                        )}

                                        {event.genres.map((genre) => {
                                            return (
                                                <Badge
                                                    bg="dark"
                                                    className="mx-1  align-middle py-auto"
                                                >
                                                    {genre}
                                                </Badge>
                                            );
                                        })}
                                    </Col>
                                </Row>
                            </a>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default EventList;
