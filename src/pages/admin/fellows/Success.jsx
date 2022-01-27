import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';
import { FaUserCheck } from 'react-icons/fa';
import Sidebar from '../../../components/sidebar/Sidebar';

function FellowSuccess() {
    let navigate = useNavigate();
    return (
        <Sidebar>
            <Container>
                <div className="d-flex justify-content-center">
                    <Card style={{ width: 40 + 'rem' }}>
                        <div className="d-flex justify-content-center bg-success">
                            <FaUserCheck className="cs-success-icon" />
                        </div>
                        <Card.Body className="text-center">
                            <h3 className="fw-bolder mb-3">
                                Congrats!
                            </h3>
                            <h5 className="text-muted fw-normal">
                                Fellow successfully registered
                            </h5>
                        </Card.Body>
                        <div className="d-flex justify-content-center gap-2 mb-4">
                            <button className="btn btn-light"
                                onClick={() => navigate('/admin/fellow/add-new')}>
                                Create another
                            </button>
                            <button className="btn btn-primary"
                                onClick={() => navigate('/admin/fellow/manage-fellows')}>
                                Manage Fellows
                            </button>
                        </div>
                    </Card>
                </div>
            </Container>
        </Sidebar>
    )
}

export default FellowSuccess
