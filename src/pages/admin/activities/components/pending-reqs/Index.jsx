import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Activity from './Activity';
import { useActivityReqs } from '../../../../../hooks/useRequests'

function PendingActivity(props) {

    let navigate = useNavigate();
    const { isLoading, isError, data } = useActivityReqs()
    const { title } = props;

    return (
        <Col md={6}>
            <Card className="border-0 p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="flex-column">
                        <h4 className="fw-bold text-capitalize mb-0">
                            {title}
                        </h4>
                        <small className="text-primary fw-bold">
                            Total Requests : {data && data.length}
                        </small>
                    </div>
                    <button
                        className="btn btn-outline-primary rounded-pill px-3"
                        type="button" onClick={()=> navigate('/admin/activity/manage-requests')}>
                        View All
                    </button>
                </div>
                {isLoading && <div>Loading</div>}
                {isError && <div>Error</div>}
                {data &&
                    data.slice(0, 5).map(activity => (
                            <Activity
                            key={activity._id}
                            activity={activity.activity_id.activity_type}
                            program={activity.program_id.topic}
                            date={activity.created_date}
                            />
                        )
                    )
                }

            </Card>
        </Col>
    )
}

export default PendingActivity
