import React from 'react'
import TimeAgo from 'react-timeago'
import '../../../../../assets/css/alpha-icons.css'

function RequestsListContent(props) {

    // eslint-disable-next-line
    const { date, fellow, program, activity } = props;
    const firstLetter = program.slice(0, 1)

    return (
        <div className="d-flex align-items-center mb-4">
            <div className="asm-alpha-icons-4">
                {firstLetter}
            </div>
            <div className="flex-grow-1 ms-3">
                <div className="d-flex justify-content-between">
                    <div className="flex-column">
                        <h6 className="mb-1">
                            {program}
                        </h6>
                        <small>
                            {fellow}
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

export default RequestsListContent
