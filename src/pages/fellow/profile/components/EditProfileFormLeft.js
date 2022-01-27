import React from 'react'
import UpdateProfilePicture from './UpdateProfilePicture'

function EditProfileFormLeft({ user }) {
    const { email } = user
    return (
        <>
            <UpdateProfilePicture />
            <div className="mt-5">
                <h3 className="text-center fw-bolder">User Details</h3>
                <form>
                    <div className="mb-4">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control border-0 py-2"
                            value={email} />
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control border-0 py-2"
                            value="password" />
                    </div>
                    <div className="d-flex justify-content-center gap-2">
                        <button type="button" className="btn btn-outline-danger">
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditProfileFormLeft
