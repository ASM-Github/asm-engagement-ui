import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';
import { BsCalendar2EventFill } from 'react-icons/bs';
import Sidebar from '../../../components/sidebar/Sidebar';

function ActivitySuccsess() {
    let navigate = useNavigate();
    let search = useLocation().search;
    const act_name = new URLSearchParams(search).get('activity_name')
    return (
        <Sidebar>
            <Container>
                <div className="d-flex justify-content-center">
                    <Card style={{ width: 40 + 'rem' }}>
                        <div className="d-flex justify-content-center cs-bg-success">
                            <BsCalendar2EventFill className="cs-success-icon" />
                        </div>
                        <Card.Body className="text-center">
                            <h3 className="fw-bold">
                                Congrats!
                            </h3>
                            <h4 className="text-muted">
                                Activity successfully created
                            </h4>
                            <p className="mt-3 mb-0 text-muted">
                                {act_name}
                            </p>
                        </Card.Body>
                        <div className="d-flex justify-content-center gap-2 mb-4">
                            <button className="btn btn-light"
                                onClick={() => navigate('/admin/activity/add-new')}>
                                Create another activity
                            </button>
                            <button className="btn btn-primary"
                                onClick={() => navigate('/admin/activity')}>
                                Manage Activity
                            </button>
                        </div>
                    </Card>
                </div>
            </Container>
        </Sidebar>
    )
}

export default ActivitySuccsess


