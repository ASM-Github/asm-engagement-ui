import React from 'react'
import { BsCheckCircle } from 'react-icons/bs'
function AddActivtySuccess({ handleModal }) {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <BsCheckCircle style={{ fontSize: 5 + 'rem' }}
                    className="bx-tada text-success text-opacity-75 my-5" />
            </div>
            <h6 className="text-center mb-4 fw-light">
                Submitted! Admin will be approve your request soon.
            </h6>
            <div className="d-flex justify-content-center">
                <button type="button"
                    className="btn btn-light px-5"
                    onClick={handleModal}>
                    Okay
                </button>
            </div>
        </div>
    )
}

export default AddActivtySuccess
