import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LeftSideLayout from '../layout/LeftSide'
import Profile from '../components/Profile'

function Main() {
    return (
        <Container className="mt-4">
            <Row>
                <Col md={9}>
                    <LeftSideLayout />
                </Col>
                <Col md={3}>
                    <Profile />
                </Col>
            </Row>
        </Container>
    )
}

export default Main
