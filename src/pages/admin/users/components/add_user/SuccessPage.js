import React from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import { MdCached } from 'react-icons/md'
function AddUserSuccess({ submitted, loading, closeModal }) {
    return (
        <>
            {submitted && !loading ?
                <>
                    <div className="d-flex justify-content-center mt-5">
                        <BsCheckCircle style={{ fontSize: 5 + 'rem' }}
                            className="bx-tada text-success text-opacity-75 my-5" />
                    </div>
                    <h6 className="text-center mb-4 fw-light fw-bold">
                        User Created Successfully
                    </h6>
                    <div className="d-flex justify-content-center mb-5">
                        <button type="button"
                            className="btn btn-light px-5"
                            onClick={closeModal}>
                            Okay
                        </button>
                    </div>
                </>
                :
                <>
                    <div className="d-flex justify-content-center mt-5">
                        <MdCached style={{ fontSize: 5 + 'rem' }}
                            className="bx-spin text-primary text-opacity-75 my-5" />
                    </div>
                    <h6 className="text-center mb-4 fw-light fw-bolder mb-5">
                        Please wait for a moment ..
                    </h6>

                </>
            }
        </>
    )
}

export default AddUserSuccess
