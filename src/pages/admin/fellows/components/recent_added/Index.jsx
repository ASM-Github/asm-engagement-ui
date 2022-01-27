import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router';
import Fellow from './details'

function MainFellowsCard({ fellows }) {

    let navigate = useNavigate()
    const recentFellows = fellows.slice(0, 5)

    return (
        <Card className="border-0 p-4">
            <div className="mb-3">
                <h4 className="fw-bold mb-0">Recent Added</h4>
                <small className="fw-bold text-primary">
                    Total Fellows :  {fellows.length}
                </small>
            </div>
            {
                recentFellows.map(fellow =>
                    <Fellow
                        key={fellow._id}
                        id={fellow.id}
                        name={fellow.name}
                        nric={fellow.nric}
                        phone={fellow.phone}
                        discipline={fellow.discipline}
                        expertise={fellow.expertise}
                        role={fellow.role}
                    />
                )
            }
            <div className="d-flex justify-content-center mt-3  ">
                <button
                    className="btn btn-outline-primary rounded-pill px-5"
                    type="button" onClick={() => navigate('/admin/fellow/manage-fellows')}>
                    View More
                </button>
            </div>
        </Card>
    )
}

export default MainFellowsCard
