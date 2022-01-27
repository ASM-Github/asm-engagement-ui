import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';
import { BsCalendar2EventFill } from 'react-icons/bs';
import Sidebar from '../../../components/sidebar/Sidebar';

function ProgramSuccsess() {
    let navigate = useNavigate();
    return (
        <Sidebar>
            <Container>
                <div className="d-flex justify-content-center">
                    <Card style={{ width: 40 + 'rem' }} className="border-0">
                        <div className="d-flex justify-content-center bg-success">
                            <BsCalendar2EventFill className="cs-success-icon" />
                        </div>
                        <Card.Body className="text-center">
                            <h3 className="fw-bolder">
                                Congrats!
                            </h3>
                            <h4 className="text-muted fw-normal mb-4">
                                Program successfully created
                            </h4>
                        </Card.Body>
                        <div className="d-flex justify-content-center gap-2 mb-4">
                            <button className="btn btn-light px-4"
                                onClick={() => navigate('/admin/program/add-new')}>
                                Create another
                            </button>
                            <button className="btn btn-primary px-4"
                                onClick={() => navigate('/admin/program/manage-programs')}>
                                Manage Programs
                            </button>
                        </div>
                    </Card>
                </div>
            </Container>
        </Sidebar>
    )
}

export default ProgramSuccsess

