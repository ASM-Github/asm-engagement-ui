import React from 'react'
import { BsCalendar2Week } from 'react-icons/bs'
import { dateFormat } from '../../../../utils/dateFormat'
import { Card } from 'react-bootstrap';
function Program({ topic, start_date, end_date }) {
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
                                    {topic}
                                </h5>
                                <small>
                                    {`${dateFormat(start_date, 'PP')} 
                                    - ${dateFormat(end_date, 'PP')}`}
                                </small>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="mb-0 text-warning fw-bolder">
                                {`${dateFormat(start_date, 'iiii')}`}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default Program
