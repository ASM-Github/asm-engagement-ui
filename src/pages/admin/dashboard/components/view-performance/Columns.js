import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineInfoCircle } from 'react-icons/ai'
import '../../../../../assets/css/alpha-icons.css'
import { BadgeByUserType } from '../../../../../utils/badgeByRole'

export const COLUMNS = [

    {
        Header: 'Fellow Name',
        accessor: 'fellow_id.name',
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
        Header: 'Role',
        accessor: 'fellow_id.role',
        Cell: ({ value }) => {
            return (
                <span className={BadgeByUserType(value)}>
                    {value}
                </span>
            )
        }
    },
    {
        Header: 'Total Score',
        accessor: 'score',
        Cell: ({ value }) => {
            return (
                <span className="badge bg-danger">{value}</span>
            )
        }
    },
    {
        Header: 'Action',
        accessor: '_id',
        disableSortBy: true,
        Cell: ({ value }) => {
            let navigate = useNavigate()
            const PATHNAME = `/admin/user/view/${value}`
            return (
                <button type="button" className="btn btn-secondary"
                    onClick={() => navigate(PATHNAME)}>
                    <AiOutlineInfoCircle className="text-primary" />
                </button>

            )
        }
    }


]