import React from 'react'
import { MdCached } from 'react-icons/md';
function AddActivityLoading() {
    return (
        <div className="py-4">
            <div className="d-flex justify-content-center">
                <MdCached style={{ fontSize: 5 + 'rem' }}
                    className="bx-spin text-primary text-opacity-75 my-5" />
            </div>
            <h6 className="text-center mb-4 fw-light fw-bolder">
                Please wait for a moment ..
            </h6>

        </div>
    )
}

export default AddActivityLoading
