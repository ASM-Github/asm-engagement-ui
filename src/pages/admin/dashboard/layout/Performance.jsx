import React from 'react';
import PerformanceCard from '../components/PerformanceHeader';
// import Event from '../components/Event';
import { Row, Col } from 'react-bootstrap'

function Performance() {
    return (
        <>
            <Row>
                <Col md={12}>
                    <PerformanceCard />
                </Col>
                {/* <Col md={4}>
                    <Event />
                    <Event />
                </Col> */}
            </Row>
        </>
    )
}

export default Performance;