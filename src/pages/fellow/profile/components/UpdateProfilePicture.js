import React from 'react'
import BlankProfile from '../../../../assets/images/blank-profile.png'
function UpdateProfilePicture() {
    return (
        <div className="d-flex justify-content-center">
            <div className="d-flex flex-column align-middle">
                <img src={BlankProfile}
                    className="img-thumbnail rounded-circle"
                    style={{ height: 10 + 'rem', width: 10 + 'rem' }}
                    alt="profile" />
                <div className="d-flex gap-2 mt-3">
                    <button type="button" className="btn btn-primary">
                        Update
                    </button>
                    <button type="button" className="btn btn-light text-danger fw-bold">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UpdateProfilePicture
