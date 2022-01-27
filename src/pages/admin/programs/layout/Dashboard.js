import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import PendingRequestsAPI from '../components/pending-requests/API';
import RecentAddedAPI from '../components/recent-added/API'

function Program() {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <PendingRequestsAPI />
                </Col>
                <Col md={8}>
                    <RecentAddedAPI />
                </Col>
            </Row>
        </Container>
    )
}

export default Program
