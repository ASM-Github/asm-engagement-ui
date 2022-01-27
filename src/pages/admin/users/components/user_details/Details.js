import React from 'react'
import { MdOutlineEmail, MdOutlineRoom } from 'react-icons/md'
import UserProfile from '../../../../../assets/images/blank-profile.png'
function UserDetailsCard({ user, details }) {
    const { email, user_type } = user
    const { name, address, discipline, expertise, role } = details

    return (
        <div className="d-flex align-items-center p-4">
            <div>
                <img src={UserProfile}
                    className="img-thumbnail rounded-circle"
                    style={{ height: 10 + 'rem', width: 10 + 'rem' }}
                    alt="profile" />
            </div>
            <div className="flex-grow-1 ms-3">
                <div>
                    <h3 className="fw-bolder mb-0">{name}</h3>
                </div>
                <div className="d-flex align-items-center mb-3 mt-1">
                    <MdOutlineEmail className="text-black-50" />
                    <small className="mx-3 fw-bold">{email}</small>
                    <div className="badge bg-success">
                        {user_type}
                    </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                    <MdOutlineRoom className="text-black-50" />
                    <h6 className="mb-0 ms-3">{address}</h6>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="flex-column">
                        <h6 className="fw-bolder">Discipline</h6>
                        <small className="text-black-50">{discipline}</small>
                    </div>
                    <div className="flex-column">
                        <h6 className="fw-bolder">Expertise</h6>
                        <small className="text-black-50">{expertise}</small>
                    </div>
                    <div className="flex-column">
                        <h6 className="fw-bolder">Role</h6>
                        <small className="text-black-50">{role}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetailsCard
