import React, { useState } from 'react';
import { MdCancel } from 'react-icons/md'
import DeleteConfirmation from './ModalCancelReqs';
import '../../../../../assets/css/alpha-icons.css'

export const COLUMNS = [
    {
        Header: 'Activity Name',
        accessor: 'activity_id.activity_type',
        Cell: ({ value }) => {
            const firstLetter = value.slice(0, 1)
            return (
                <div className="d-flex align-items-center">
                    <div className="asm-alpha-icons">
                        <span className="text-center text-primary fw-bolder">
                            {firstLetter}
                        </span>
                    </div>
                    <h6 className="ms-4 mb-0 fw-bolder text-black">
                        {value}
                    </h6>
                </div>
            )
        },
    },
    {
        Header: 'Program',
        accessor: 'program_id.topic',
    },
    {
        Header: 'Action',
        accessor: '_id',
        disableSortBy: true,
        Cell: ({ value }) => {
            const [show, setShow] = useState(false);
            return (
                <>
                    <DeleteConfirmation show={show} setShow={setShow} id={value} />
                    <div>
                        <button type="button" className="btn btn-light text-danger me-2"
                            onClick={() => setShow(true)}
                        >
                            <MdCancel />
                        </button>
                    </div>
                </>
            )
        }
    }
]