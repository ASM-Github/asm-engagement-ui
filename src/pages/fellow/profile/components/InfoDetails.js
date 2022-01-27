import React from 'react'
import { Row, Col } from 'react-bootstrap';
function InfoDetails({ label, name }) {
    return (
        <Row className="mb-4">
            <Col md={4}>
                <label>
                    {label}
                </label>
            </Col>
            <Col md={8}>
                <span className="fw-bolder">
                    {name}
                </span>
            </Col>
        </Row>
    )
}

export default InfoDetails
