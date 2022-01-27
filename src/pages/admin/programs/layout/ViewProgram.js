import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import Details from '../components/view-program/Details'
import Participant from '../components/view-program/Participant'

function ViewPrograms({ program }) {
    // console.log(program)
    return (
        <Container>
            <Row>
                <Col md={8}>
                    <Details details={program} title="Program Details" />
                </Col>
                <Col md={4}>
                    <Participant users={program.users} />
                </Col>
            </Row>
        </Container>
    )
}

export default ViewPrograms
