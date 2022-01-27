import React from 'react';
import { Accordion } from 'react-bootstrap'
import ActivityContent from './Activity'
import './involvement.css'


function Program({ activities, topic, index }) {

    const totalActivity = activities.length;

    return (
        <>
            <Accordion.Item eventKey={index}>
                <Accordion.Header>
                    <div className="d-flex align-items-center">
                        <span>{topic}</span>
                        <span className="ms-3 badge bg-danger">
                            {totalActivity}
                            {totalActivity > 1 ? ' activities' : ' activity'}
                        </span>
                    </div>
                </Accordion.Header>
                <Accordion.Body style={{ width: 50 + 'rem' }}>
                    <ActivityContent activities={activities} />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1"></Accordion.Item>
        </>
    );
}

export default Program;
