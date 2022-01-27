import React from 'react'
import TimeAgo from 'react-timeago'

function Activity({ activity, program, date }) {
    const firstLetter = activity.slice(0, 1)
    return (
        <div className="d-flex align-items-center mb-4">
            <div className="asm-alpha-icons-4">
                {firstLetter}
            </div>
            <div className="flex-grow-1 ms-4">
                <div className="d-flex justify-content-between">
                    <div className="flex-column">
                        <h6 className="mb-1">
                            {activity}
                        </h6>
                        <small>
                            {program}
                        </small>
                    </div>
                    <div>
                        <span className="badge bg-primary">
                            <TimeAgo date={date} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity