import React from 'react'

function UserCountCard({ total_programs, total_activities }) {
    return (
        <div className="d-flex justify-content-evenly my-4 my-auto">
            <div>
                <h1 className="text-center text-primary">
                    {total_programs}
                </h1>
                <h3 className="mb-0">
                    Program
                </h3>
            </div>
            <div>
                <h1 className="text-center text-danger">
                    {total_activities}
                </h1>
                <h3 className="mb-0">
                    Program
                </h3>
            </div>
        </div>
    )
}

export default UserCountCard
