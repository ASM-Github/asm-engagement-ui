import React from 'react'
import { useNavigate } from 'react-router-dom'
import Fellowlist from './PerformanceFetch';
import { Card } from 'react-bootstrap'
import '../../../../components/card/card.css'

function PerformanceCard({ scores }) {

    let navigate = useNavigate();
    const MANAGE_PERFORMANCE_URL = '../fellow/manage-performance'
    return (
        <Card className="card border-0 p-4 mb-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h4 className="text-capitalize fw-bold mb-0">
                        fellow performance
                    </h4>
                    <small className="text-black-50 fw-bold">
                        View top 10 fellows performance
                    </small>
                </div>
                <div className="cs-chart-legend">
                    <button className="btn btn-outline-primary rounded-pill px-4"
                        onClick={() => navigate(MANAGE_PERFORMANCE_URL)}>
                        View
                    </button>
                </div>
            </div>
            <Fellowlist scores={scores} />
        </Card >
    )
}

export default PerformanceCard
