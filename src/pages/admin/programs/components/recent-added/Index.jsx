import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap'
import List from './Content'
import '../../../../../assets/css/alpha-icons.css'

function RecentAdded({ programs }) {
    const recentPrograms = programs.slice(0, 5)
    let navigate = useNavigate()
    return (
        <Card className="border-0 p-4">
            <div className="mb-3">
                <h4 className="mb-0 fw-bold">Recent Added</h4>
                <small className="fw-bold text-primary">
                    Total Programs : {programs.length}
                </small>
            </div>
            {
                recentPrograms.map(program => (
                    <List
                        key={program._id}
                        id={program._id}
                        topic={program.topic}
                        desc={program.description}
                        start_date={program.start_date}
                        end_date={program.end_date} />
                ))
            }
            <div className="d-flex justify-content-center mt-4">
                <button type="button" className="btn btn-outline-primary rounded-pill px-5"
                    onClick={() => navigate('/admin/program/manage-programs')}>
                    View More
                </button>
            </div>
        </Card>
    )
}

export default RecentAdded
