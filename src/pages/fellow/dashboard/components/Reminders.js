import React from 'react'
import { VscBellDot } from 'react-icons/vsc'
import { FcLeave } from 'react-icons/fc'

function Reminders() {
    return (
        <div className="px-4" style={{ height: 209 + 'px' }}>
            <div>
                <div className="d-flex justify-content-between mt-4">
                    <h5 className="fw-bolder">Reminders</h5>
                    <VscBellDot className="text-danger" />
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <FcLeave style={{ fontSize: 5 + 'rem' }} />
                </div>
                <h6 className="text-center mb-4 text-black-50 my-2">
                    Nothing for today!
                </h6>
            </div>
        </div>
    )
}

export default Reminders
