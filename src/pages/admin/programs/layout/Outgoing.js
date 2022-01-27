import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap';
import RecentPrograms from '../main/RecentPrograms';
function ProgramsList({ programs }) {
    return (
        <Container>
            <Row>
                <Col md={8}>
                    <div>
                        <h3>
                            Ongoing Program
                        </h3>
                        <Card>
                            No data
                        </Card>
                    </div>
                    <RecentPrograms programs={programs} />
                </Col>
                <Col md={4}>

                </Col>
            </Row>
        </Container>
    )
}

export default ProgramsList
