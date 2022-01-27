import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap'
import { FaUser, FaUserTie } from 'react-icons/fa'
import Modal from '../add_user/Modal'

function UsersManagementActions(props) {
    const [openModal, setOpenModal] = useState(false)
    const { id, btn, sub, color, icon, url } = props
    let navigate = useNavigate()
    return (
        <Col md={6}>
            <Card className={`border-0 p-4 my-2 bg-opacity-25 bg-${color}`}>
                <div className="d-flex align-items-center">
                    <div style={{ fontSize: 4 + 'rem' }}>
                        {
                            icon === 1 ?
                                <FaUser className={`text-${color}`} /> :
                                <FaUserTie className={`text-${color}`} />
                        }
                    </div>
                    <div className="flex-grow-1 ms-4">
                        {id === 3 ?
                            <>
                                <button type="button" className={`mb-3 btn btn-${color} text-white`}
                                    onClick={() => setOpenModal(true)}>
                                    {btn}

                                </button>
                                <Modal modal={openModal} handleModal={setOpenModal} />
                            </>
                            :
                            <button type="button" className={`mb-3 btn btn-${color} text-white`}
                                onClick={() => navigate(url)}>
                                {btn}
                            </button>}

                        <h6 className="mb-0">
                            {sub}
                        </h6>
                    </div>
                </div>
            </Card>
        </Col>
    )
}

export default UsersManagementActions
