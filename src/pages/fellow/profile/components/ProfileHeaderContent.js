import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {
    AiFillMail, AiFillTrophy, AiFillTag,
    AiOutlinePieChart, AiOutlineUnorderedList
} from 'react-icons/ai'
import { BsPinMapFill } from 'react-icons/bs'
import { MdMoreHoriz } from 'react-icons/md'
import Tab from './ProfileHeaderTab'
import ProfilePic from '../../../../assets/images/blank-profile.png'
import '../../../../assets/css/box.css'
function ViewProfileHeader({ details, children }) {
    let navigate = useNavigate()
    const { user_type, email } = details;
    const { name, expertise, discipline, address, programs } = details.fellow_desc;
    return (
        <>
            <Card className="mt-4 p-4 border-0">
                <div className="d-flex flex-wrap">
                    <div>
                        <img src={ProfilePic}
                            className="img-thumbnail rounded-circle"
                            style={{ height: 10 + 'rem', width: 10 + 'rem' }}
                            alt="profile" />
                    </div>
                    <div className="flex-grow-1 ms-5">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-column mb-3">
                                <div className="d-flex align-items-center mb-3">
                                    <h3 className="mb-0 fw-bolder">
                                        {name}
                                    </h3>
                                    <span className="ms-3 badge bg-dark">
                                        {user_type}
                                    </span>
                                </div>
                                <div className="d-flex flex-wrap mb-1">
                                    <h6 className="d-flex align-items-center">
                                        <AiFillTag className="asm-text-gray" />
                                        <span className="text-muted ms-2">
                                            {expertise}
                                        </span>
                                    </h6>
                                    <h6 className="d-flex align-items-center ms-5">
                                        <AiFillTrophy className="asm-text-gray" />
                                        <span className="text-muted ms-2">
                                            {discipline}
                                        </span>
                                    </h6>
                                    <h6 className="d-flex align-items-center ms-5">
                                        <AiFillMail className="asm-text-gray" />
                                        <span className="text-muted ms-2">
                                            {email}
                                        </span>
                                    </h6>
                                </div>
                                <div>
                                    <h6 className="d-flex align-items-center">
                                        <BsPinMapFill />
                                        <span className="ms-3">
                                            {address}
                                        </span>
                                    </h6>
                                </div>
                            </div>
                            <div>
                                <button type="button" className="btn btn-primary me-2"
                                    onClick={() => navigate('/fellow/view-profile/edit')}>
                                    Edit Profile
                                </button>
                                <button type="button" className="btn btn-outline-primary">
                                    <MdMoreHoriz />
                                </button>
                            </div>
                        </div>
                        <div className="d-flex gap-4">
                            <div className="asm-box-count">
                                <div className="d-flex justify-content-center pt-2">
                                    <span className="text-success">
                                        <AiOutlinePieChart />
                                    </span>
                                    <h3 className="fw-bolder ms-2">
                                        {programs.length}
                                    </h3>
                                </div>
                                <h6 className="text-center">programs</h6>
                            </div>
                            <div className="asm-box-count">
                                <div className="d-flex justify-content-center pt-2">
                                    <span className="text-success">
                                        <AiOutlineUnorderedList />
                                    </span>
                                    <h3 className="fw-bolder ms-2">
                                        {programs.length}
                                    </h3>
                                </div>
                                <h6 className="text-center">activities</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <Tab />
            </Card>
            {children}
        </>

    )
}

export default ViewProfileHeader
