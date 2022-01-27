import React from 'react'
import { Row } from 'react-bootstrap'
import { dateFormat } from '../../../../utils/dateFormat'
import ProgramListCard from './ProgramContentCard'

function ProgramsContent({ programs }) {

    // const { _id: newPrograms } = programs;

    return (
        <>
            <div className="mb-5">
                <div className="d-flex align-items-center mt-4">
                    <div>
                        <h3 className="fw-bolder m-0">
                            Programs Involvement
                        </h3>
                    </div>
                    <div className="ms-2">
                        <span className="badge bg-danger m-0 asm-fs-badge">
                            {programs.length}
                        </span>
                    </div>
                </div>
                <Row>
                    {
                        programs.map(program => {
                            const { topic, start_date, end_date } = program._id
                            return (
                                <ProgramListCard
                                    topic={topic}
                                    start_date={dateFormat(start_date, 'P')}
                                    end_date={dateFormat(end_date, 'P')} />
                            )
                        })
                    }
                </Row>
            </div>
        </>
    )
}

export default ProgramsContent
