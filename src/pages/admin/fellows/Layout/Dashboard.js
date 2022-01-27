import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RequestsAPI from '../components/request_list/API'
import RecentAddedAPI from '../components/recent_added/API'

function Fellow() {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <RequestsAPI />
                </Col>
                <Col md={6}>
                    <RecentAddedAPI />
                </Col>
            </Row>
        </Container>
    )
}

export default Fellow
