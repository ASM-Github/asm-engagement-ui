import React from 'react'
import { BsCalendar2Week } from 'react-icons/bs'
import TimeAgo from 'react-timeago'
import { Card } from 'react-bootstrap';

function RecentProgram(props) {

    const { program, activity, date } = props;

    return (
        <Card className="bg-warning bg-opacity-25 p-3 mb-3 border-0">
            <div className="d-flex align-items-center">
                <div className="me-4">
                    <BsCalendar2Week
                        className="asm-event-icon text-warning" />
                </div>
                <div className="flex-grow-1">
                    <div className="d-flex justify-content-between flex-wrap">
                        <div className="flex-column">
                            <div>
                                <h5 className="fw-bolder">
                                    {program}
                                </h5>
                                <small>
                                    {activity}
                                </small>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="mb-0 badge bg-dark bg-opacity-75">
                                <TimeAgo date={date} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default RecentProgram
