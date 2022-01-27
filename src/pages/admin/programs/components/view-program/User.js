import React from 'react'
import { Card } from 'react-bootstrap'
import { FaUser } from 'react-icons/fa'

function User(props) {
    const { name, role } = props
    return (
        <Card className='mb-3 px-5 py-3 border-0 bg-primary bg-opacity-25'>
            <div className='d-flex align-items-center'>
                <FaUser className='bx bxs-like bx-flashing' style={{ fontSize: 2.5 + 'rem' }} />

                <div className='flex-column ms-4'>
                    <div className="fs-5 fw-bolder text-dark text-hover-primary mt-2">
                        {name}
                    </div>
                    <small className='text-white badge bg-primary'>{role}</small>
                </div>
            </div>

        </Card>
    )
}

export default User