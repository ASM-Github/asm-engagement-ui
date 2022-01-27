import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa'
import Reminders from './Reminders';
import BlackProfile from '../../../../assets/images/blank-profile.png';
import { isAuth } from './../../../../auth/Login/helpers';
function Profile() {
    const {
        fellow_desc,
        name, discipline,
        expertise,
        user_type } = isAuth();
    const EDITPROFILEIMG = `/fellow/manage-profile/update-profile${fellow_desc}`
    const EDITPROFILE = `/fellow/view-profile/overview`
    let navigate = useNavigate();
    return (
        <Card className="pt-5 border-0">
            <div className="d-flex justify-content-center">
                <span className="position-relative">
                    <img src={BlackProfile}
                        className="img-thumbnail rounded-circle position-relative"
                        style={{ height: 10 + 'rem', width: 10 + 'rem' }}
                        alt="profile" />
                    <span className="position-absolute top-0 start-100 translate-middle">
                        <FaEdit className="asm-link-cursor asm-edit-icon 
                        text-black text-opacity-25 bx-tada-hover"
                            onClick={
                                () => navigate(EDITPROFILEIMG)
                            } />
                    </span>
                </span>
            </div>
            <Link to={EDITPROFILE} className="text-decoration-none">
                <h4 className="text-center my-3 fw-bolder">
                    {name}
                </h4>
            </Link>
            <div className="d-flex justify-content-center mb-4">
                <span className="badge bg-dark">
                    {user_type}
                </span>
            </div>
            <div className="mx-5">
                <h6>
                    <i className='bx bxl-nodejs bx-border-circle me-4'></i>
                    {discipline}
                </h6>
                <h6>
                    <i className='bx bxl-nodejs bx-border-circle me-4'></i>
                    {expertise}
                </h6>
            </div>
            <Reminders />
        </Card >
    )
}

export default Profile
