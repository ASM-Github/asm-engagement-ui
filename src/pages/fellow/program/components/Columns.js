import React from 'react';
import AddActivityModal from './AddActivityModal';
import { AiOutlineExclamationCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { dateFormat } from '../../../../utils/dateFormat'
import { isAuth } from '../../../../auth/Login/helpers';
import '../../../../assets/css/alpha-icons.css'

export const COLUMNS = [
    {
        Header: 'Program Name',
        accessor: '_id.topic',
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
        Header: 'Start Date',
        accessor: '_id.start_date',
        Cell: ({ value }) => {
            return dateFormat(value, 'PPP')
        }
    },
    {
        Header: 'End Date',
        accessor: '_id.end_date',
        Cell: ({ value }) => {
            return dateFormat(value, 'PPP')
        }
    },
    {
        Header: 'Activities',
        accessor: 'activities.length',
        Cell: ({ value }) => {
            return (
                <span className="badge bg-primary">{value}</span>
            )
        }
    },
    {
        Header: 'Actions',
        accessor: '_id._id',
        Cell: ({ row, value }) => {

            let navigate = useNavigate();
            const [openModal, setOpenModal] = React.useState(false)
            const topic = row.cells[0].value;
            const fid = isAuth().fellow_desc;

            return (
                <div>
                    <button type="button" className="btn btn-light text-info me-2"
                        onClick={() => navigate(`/fellow/manage-programs/${value}`)}
                    >
                        <AiOutlineExclamationCircle />
                    </button>
                    <button type="button" className="btn btn-light text-primary"
                        onClick={() => setOpenModal(true)}>
                        <AiOutlinePlusCircle />
                    </button>
                    <AddActivityModal
                        show={openModal}
                        setModal={setOpenModal}
                        topic={topic}
                        programId={value}
                        fellowId={fid}
                    />
                </div>

            )
        }

    }
]