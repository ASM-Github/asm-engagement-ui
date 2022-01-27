import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import NoData from './PendingProgramsNoData'
import ActivityItems from './PendingProgramsItems'

function RecentProgramsCard({ programs }) {
    const pendingProgramLimit = programs.slice(0, 5)
    let navigate = useNavigate();
    const MANAGEPROGRAMS = '/fellow/programs/pending-list'
    return (
        <Card className="p-4 mt-4 border-0" style={{ height: 398 + 'px' }}>
            <div className="d-flex justify-content-between mb-3">
                <h4 className="fw-bolder">
                    Pending Programs
                </h4>
                {
                    pendingProgramLimit.length < 1 ? null :
                        <button className="btn btn-outline-primary rounded-pill px-3 btn-sm"
                            onClick={() => navigate(MANAGEPROGRAMS)}>
                            view
                        </button>
                }

            </div>
            {programs.length < 1 ? <NoData /> : <ActivityItems programs={programs} />}

        </Card>
    )
}

export default RecentProgramsCard
