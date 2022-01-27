import React from 'react'
import { BsCardHeading, BsPhone } from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { RoleFormatter } from '../../../../../utils/role'
import '../../../../../assets/css/alpha-icons.css'

function MainFellow(props) {

    const { name, nric, phone, role } = props
    const firstLetter = name.slice(0, 1)

    return (
        <div className="d-flex align-items-center mb-4">
            <div className="asm-alpha-icons-4">
                {firstLetter}
            </div>
            <div className="flex-grow-1">
                <div className="d-flex justify-content-between ms-3">
                    <div className="flex-column">
                        <h6>
                            {name}
                        </h6>
                        <small>
                            <BsCardHeading className="text-primary" /> {nric}
                            <BsPhone className="ms-3 text-primary" /> {phone}
                        </small>
                    </div>
                    <div className="my-auto">
                        <span className="badge bg-primary bg-opacity-25 text-primary">
                            {RoleFormatter(role)}
                        </span>
                    </div>
                    <div className="my-auto">
                        <button
                            type="button"
                            className="btn btn-secondary">
                            <AiOutlineInfoCircle className="text-primary" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainFellow
