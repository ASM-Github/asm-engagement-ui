import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { HiOutlineMail, HiOutlineUserAdd } from 'react-icons/hi'
import '../../../../../assets/css/alpha-icons.css'
import { dateFormat } from '../../../../../utils/dateFormat';

function MainUser({ id, email, type, date }) {
    const firstLetter = email.slice(0, 1)
    return (
        <Col md={3}>
            <Card className="p-4 bg-primary bg-opacity-25 border-0">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="asm-alpha-icons-4 text-uppercase">
                        {firstLetter}
                    </div>
                    <div>
                        <span className="badge bg-black">
                            {type}
                        </span>
                    </div>
                </div>
                <div className="mb-4">
                    <h6 className="mt-5 fw-bolder">
                        Email
                    </h6>
                    <small>
                        <HiOutlineMail className="text-primary" />
                        <span className="ms-3">
                            {email}
                        </span>
                    </small>
                </div>
                <div>
                    <h6 className="fw-bolder">
                        Created date
                    </h6>
                    <small>
                        <HiOutlineUserAdd className="text-primary" />
                        <span className="ms-3">
                            {dateFormat(date, 'PP')}
                        </span>
                    </small>
                </div>
            </Card>
        </Col>
    )
}

export default MainUser
