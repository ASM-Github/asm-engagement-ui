import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Welcome from './Welcome'
import ProgramsList from './ProgramsList'
import ActivitiesList from './ActivitiesList'

function LeftSideContents({ score }) {
    return (
        <>
            <Welcome totalScore={score.totalScore} />
            <Row>
                <Col md={6}>
                    <ProgramsList programs={score.programs} />
                </Col>
                <Col md={6}>
                    <ActivitiesList programsActivities={score} />
                </Col>
            </Row>
        </>
    )
}

export default LeftSideContents
