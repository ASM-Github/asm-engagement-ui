import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Details from '../components/user_details/Details'
import Programs from '../components/program_by_user/Index';
import UserCountCard from '../components/user_details/Count';

function User({ user }) {
    const { name, programs } = user.fellow_desc;
    const totalPrograms = programs.length;

    return (
        <Container>
            <Row>
                <Col md={7}>
                    <Card className="border-0">
                        <Details
                            user={user}
                            details={user.fellow_desc} />
                    </Card>
                </Col>
                <Col md={5} className="">
                    <Card className="border-0 h-100">
                        <UserCountCard
                            total_programs={totalPrograms}
                            total_activities="0" />
                    </Card>
                </Col>
            </Row>
            <Programs programs={programs} name={name} />
        </Container >
    )
}

export default User
