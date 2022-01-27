import React from 'react'
import { Card } from 'react-bootstrap'
import { BsArrowsAngleExpand } from 'react-icons/bs'
import { usePendingActbyFid } from './../../../../hooks/usePendingParams';
import { isAuth } from './../../../../auth/Login/helpers';
import PendingActivity from './PendingActivity';

function ActivitiesList() {
    const { fellow_desc } = isAuth()
    const { isLoading, isError, data } = usePendingActbyFid(fellow_desc)
    return (
        <Card className="p-4 mt-4 border-0">
            <div className="d-flex justify-content-between mb-3">
                <h4 className="fw-bolder mb-2">
                    Pending Request
                </h4>
                <button className="btn btn-light btn-sm">
                    <BsArrowsAngleExpand className="text-primary h6 m-0" />
                </button>
            </div>
            {isLoading && <div>Loading..</div>}
            {isError && <div>Error</div>}
            {!data &&
                <h6 className="text-muted text-center mt-5 fw-normal">
                    You have not joined any activity yet
                </h6>
            }
            {data &&
                data.pending_activities.map(i => (
                    <PendingActivity
                        date={i.request_date}
                        totalAct={i.activity_id.length}
                        program={i.program_id.topic}
                    />
                ))
            }
        </Card>
    )
}

export default ActivitiesList

