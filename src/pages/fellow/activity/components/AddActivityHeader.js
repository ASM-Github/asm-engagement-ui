import React from 'react'
import { Container, Card } from 'react-bootstrap';
import AddActivityForm from './AddActivityForm';

function AddActivityHeader({ activities }) {
    return (
        <Container className="mt-5">
            <div className="d-flex justify-content-center">
                <Card className="border-0 p-5 col-6">
                    <h3 className="fw-bolder">Join a new Activity</h3>
                    <h6 className="text-black-50">Please fill in all the required fields</h6>
                    <AddActivityForm activities={activities} />
                </Card>
            </div>
        </Container>

    )
}

export default AddActivityHeader
