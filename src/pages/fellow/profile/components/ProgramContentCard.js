import React from 'react'
import { Card, Col } from 'react-bootstrap'
import '../../../../assets/css/alpha-icons.css'
import '../../../../assets/css/box.css'

function ProgramCard(props) {
    const { topic, start_date, end_date } = props
    const firstLetter = topic.slice(0, 1)
    return (
        <Col md={4}>
            <Card className="mt-3 border-0 p-4" key={topic}>
                <div className="d-flex">
                    <div className="d-flex align-items-center">
                        <div className="asm-alpha-icons-4 fw-bolder">
                            {firstLetter}
                        </div>
                    </div>
                    <div className="flex-grow-1 ms-4">
                        <div className="flex-column">
                            <h3 className="fw-bolder mb-3">
                                {topic}
                            </h3>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="asm-box-date fw-bold p-2">
                                <small className="text-black-50">
                                    Start Date
                                </small>
                                <h6 className="mb-0">
                                    {start_date}
                                </h6>
                            </div>
                            <div className="asm-box-date fw-bold p-2">
                                <small className="text-black-50">
                                    End Date
                                </small>
                                <h6 className="mb-0">
                                    {end_date}
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </Col>
    )
}

export default ProgramCard
