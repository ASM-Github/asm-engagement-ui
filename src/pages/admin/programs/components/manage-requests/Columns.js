import React from 'react';
import TimeAgo from 'react-timeago'
import { useQueryClient } from 'react-query'
import { ToastContainer, toast } from 'react-toastify'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { approveProgram } from '../../../../../utils/AxiosService'
import '../../../../../assets/css/alpha-icons.css'

export const COLUMNS = [

    {
        Header: 'Program Name',
        accessor: 'program_id.topic',
        Cell: ({ value }) => {
            const FirstLetter = value.slice(0, 1)
            return (
                <div className="d-flex align-items-center">
                    <div className="asm-alpha-icons-2 fw-bolder text-black">
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
        Header: 'Fellow Name',
        accessor: 'fellow_desc.name',
        Cell: ({ value }) => {
            return (
                <span className="badge rounded-pill bg-primary">
                    {value}
                </span>
            )
        }
    },
    {
        Header: 'Date',
        accessor: 'created_date',
        Cell: ({ value }) => {
            return (
                <span className="badge bg-danger">
                    <TimeAgo date={value} />
                </span>
            )
        }
    },
    {
        Header: 'Actions',
        accessor: '_id',
        disableSortBy: true,
        Cell: ({ row, value }) => {
            const queryClient = useQueryClient()
            //console.log(row.original)
            const handleApprove = (fellowId, programId, activityId, requestId) => {
                const data = { programId, activityId, requestId }
                //console.log(data)
                approveProgram(fellowId, data)
                    .then(function () {
                        // refetch programs request list
                        queryClient.refetchQueries("pending-programs")
                    })
                    .catch(function (error) {
                        toast.error(error.response.data, {
                            position: "top-center",
                            autoClose: 5000,
                            theme: 'dark',
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: 0,
                        });
                    });
            }
            return (
                <>
                    <button className="btn btn-success me-3 rounded-pill"
                        onClick={
                            () => handleApprove(row.original.fellow_desc._id, row.original.program_id._id,
                                row.original.activity_id._id, value)
                        }>
                        <AiOutlineCheckCircle className="text-white me-2" />
                        Approve
                    </button>
                    <button className="btn btn-danger rounded-pill">
                        <AiOutlineCloseCircle className="text-white me-2" />
                        Reject
                    </button>
                    <ToastContainer style={{ textAlign: 'left' }} />
                </>
            )
        }
    }


]