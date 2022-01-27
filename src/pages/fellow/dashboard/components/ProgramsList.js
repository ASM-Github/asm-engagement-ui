import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { BsArrowsAngleExpand } from 'react-icons/bs'
import Program from './Program'

function ProgramsList({ programs }) {
    let navigate = useNavigate();
    const MANAGEPROGRAMS = '/fellow/manage-programs'
    return (
        <Card className="p-4 mt-4 border-0">
            <div className="d-flex justify-content-between mb-3">
                <h4 className="fw-bolder">
                    Programs
                </h4>
                <button className="btn btn-light btn-sm"
                    onClick={() => navigate(MANAGEPROGRAMS)}>
                    <BsArrowsAngleExpand className="text-primary h6 m-0" />
                </button>
            </div>
            {
                programs.map(program => {
                    const { topic, start_date, end_date } = program
                    return (
                        <Program
                            topic={topic}
                            start_date={start_date}
                            end_date={end_date}
                        />
                    )
                })
            }
        </Card>
    )
}

export default ProgramsList
