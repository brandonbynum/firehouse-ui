import React from 'react';
import { Badge, Col, Row } from 'react-bootstrap';
import { TagsOutlined } from '@ant-design/icons';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './eventList.scss';

const EventList = () => {
    const { data } = useTypedSelector((state) => state.events);
    return (
        <div id="event-list" className="rounded-4">
            {data.length > 0 &&
                data.map((event, eventIndex: number) => {
                    console.dir(event);
                    return (
                        <div
                            className="text-white border-dark mb-3 p-3 bg-light"
                            key={`event-${eventIndex}`}
                        >
                            <Row>
                                <Col xs={7}>
                                    <h4>{event.artist.name}</h4>
                                </Col>
                                <Col
                                    xs={5}
                                    className="d-flex justify-content-end"
                                >
                                    <h4>{event.date}</h4>
                                </Col>
                            </Row>
                            <Row className="my-1">
                                {/* 
                                    TODO: Reformat Date
                                */}
                                <Col xs={12}>
                                    <small>{event.event_name}</small>
                                </Col>
                            </Row>

                            {/* 
                                TODO: Display logic on venue name
                            */}
                            <div className="mb-1">
                                <small>{event.venue}</small>
                            </div>

                            <Row className="">
                                <Col xs={12} className="">
                                    <a
                                        href={event.tickets_url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Badge
                                            bg="dark"
                                            className=" align-middle pointer"
                                        >
                                            <TagsOutlined
                                                style={{ fontSize: 16 }}
                                            />
                                        </Badge>
                                    </a>

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
                        </div>
                    );
                })}
        </div>
    );
};

export default EventList;
