import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useActivitiesList } from '../../../../../hooks/useActivities'
import Activity from './Activity'

function MainActivitiesCard(props) {
    let navigate = useNavigate()
    const URL = '/admin/activity/manage-activities'
    const { isLoading, isError, data } = useActivitiesList()
    const { title } = props
    return (
        <Col md={6}>
            <Card className="border-0 p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="flex-column">
                        <h4 className="fw-bold text-capitalize mb-0">
                            {title}
                        </h4>
                        <small className="fw-bold text-primary">
                            Total Activities : {data && data.length}
                        </small>
                    </div>
                    <button type="button"
                        className="btn btn-outline-primary rounded-pill px-3"
                        onClick={() => navigate(URL)}>
                        View All
                    </button>
                </div>
                {isLoading && <div>Loading</div>}
                {isError && <div>Error</div>}
                {data &&
                    data.slice(0, 5).map(i => (
                        <Activity
                            title={i.activity_type}
                            desc={i.description} />
                    ))
                }

            </Card>
        </Col>
    )
}

export default MainActivitiesCard
