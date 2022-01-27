import React, { useState } from 'react';
import { format } from 'date-fns';
import { AiOutlineInfoCircle } from 'react-icons/ai'
import UserModal from '../view-user/UserModal'
import '../../../../../assets/css/alpha-icons.css'
import Badge from '../../../../../utils/badgeByRole'

export const COLUMNS = [

    {
        Header: 'Email',
        accessor: 'email',
        Cell: ({ value }) => {
            const FirstLetter = value.slice(0, 1)
            return (
                <div className="d-flex align-items-center">
                    <div className="asm-alpha-icons-2 fw-bolder text-black text-uppercase">
                        {FirstLetter}
                    </div>
                    <div>
                        <h6 className="text-black fw-bolder mb-0 ms-4">
                            {value}
                        </h6>
                    </div>
                </div>
            )
        }
    },
    {
        Header: 'Type of User',
        accessor: 'user_type',
        Cell: ({ value }) => {
            return (
                <span className={Badge(value)}>
                    {value}
                </span>
            )
        }
    },
    {
        Header: 'Created Date',
        accessor: 'created_date',
        Cell: ({ value }) => {
            return (format(new Date(value), 'PPPP'))
        }
    },
    {
        Header: 'Action',
        accessor: '_id',
        disableSortBy: true,
        Cell: ({ value, row }) => {

            const [modal, setModal] = useState();

            return (
                <>
                    <UserModal
                        modal={modal}
                        setModal={setModal}
                        user_id={value}
                        user_type={row.original.user_type}
                    />
                    <button type="button" className="btn btn-secondary" onClick={() => setModal(true)}>
                        <AiOutlineInfoCircle className="text-primary" />
                    </button>

                </>
            )
        }
    }


]