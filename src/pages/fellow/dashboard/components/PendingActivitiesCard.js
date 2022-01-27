import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import NoData from './PendingActivitiesNoData'
import ActivityItems from './PendingActivitiesItems'

function PendingActivitiesCard({ activities }) {

    let navigate = useNavigate();

    return (
        <Card className="p-4 mt-4 border-0" style={{ height: 398 + 'px' }}>
            <div className="d-flex justify-content-between mb-3">
                <h4 className="fw-bolder">
                    Pending Activities
                </h4>
                {
                    activities.length < 1 ? null :
                        <button className="btn btn-outline-primary rounded-pill px-3 btn-sm"
                            onClick={() => navigate('/fellow/activities/pending-list')}>
                            view
                        </button>
                }

            </div>
            {activities.length < 1 ? <NoData /> : <ActivityItems activities={activities} />}
        </Card >
    )
}

export default PendingActivitiesCard
