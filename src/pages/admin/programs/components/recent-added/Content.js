import React from 'react'
import { useNavigate } from 'react-router-dom';
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { dateFormat } from '../../../../../utils/dateFormat';

function RecentAddedContent({ topic, desc, start_date, end_date, id }) {
    const firstLetter = topic.slice(0, 1)
    let navigate = useNavigate()
    return (
        <div className="d-flex align-items-center mb-4">
            <div className="asm-alpha-icons-4">
                {firstLetter}
            </div >
            <div className="flex-grow-1 flex-nowrap">
                <div className="flex-column ms-3">
                    <div className="row">
                        <div className="col-6 my-auto">
                            <h6>
                                {topic}
                            </h6>
                            <small>
                                {desc}
                            </small>
                        </div>
                        <div className="col-4 my-auto">
                            <span className="badge bg-success bg-opacity-25 text-success mb-2">
                                {dateFormat(start_date, 'PP')}
                            </span>
                            <br />
                            <span className="badge bg-primary bg-opacity-25 text-primary">
                                {dateFormat(end_date, 'PP')}
                            </span>
                        </div>
                        <div className="col-2 my-auto">
                            <button type="button"
                                className=" btn btn-secondary px-3 text-primary"
                                onClick={() => navigate(`/admin/program/view/${id}`)}>
                                <AiOutlineInfoCircle className="me-2" />  view
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default RecentAddedContent
