import React from 'react'
import { Card } from 'react-bootstrap'
import { BsCalendar2Week } from 'react-icons/bs';
import TimeAgo from 'react-timeago'
function PendingActivity({ date, program, activity }) {
    return (
        <>
            <Card className="bg-danger bg-opacity-25 p-3 mb-3 border-0">
                <div className="d-flex align-items-center">
                    <div className="me-4">
                        <BsCalendar2Week
                            className="asm-event-icon text-danger" />
                    </div>
                    <div className="flex-grow-1">
                        <div className="d-flex justify-content-between flex-wrap">
                            <div className="flex-column">
                                <div>
                                    <h5 className="fw-bolder">
                                        {activity}
                                    </h5>
                                    <small>
                                        {program}
                                    </small>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="mb-0 text-danger fw-bolder badge bg-light">
                                    <TimeAgo date={date} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default PendingActivity
