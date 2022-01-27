import React from 'react'
import { Row, Col } from 'react-bootstrap'
import WelcomeAPI from '../components/WelcomeAPI'
import PendingActivitiesAPI from './../components/PendingActivitiesAPI';
import PendingProgramsAPI from './../components/PendingProgramsAPI';

function LeftSideContents({ score }) {
    return (
        <>
            <WelcomeAPI />
            <Row>
                <Col md={6}>
                    <PendingProgramsAPI />
                </Col>
                <Col md={6}>
                    <PendingActivitiesAPI />
                </Col>
            </Row>
        </>
    )
}

export default LeftSideContents
