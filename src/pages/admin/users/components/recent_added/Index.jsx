import React from 'react';
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import CardLayout from './Card';
import User from '../user_details/Index'

function UsersList({ users }) {
    let navigate = useNavigate()
    const recentUsers = users.slice(0, 4)

    return (
        <CardLayout title="Recent Registered" total={users.length}>
            <div className="px-4 pb-4">
                <Row>
                    {recentUsers.map(user => {
                        const { _id, email, user_type, created_date } = user
                        return (
                            <User
                                key={_id}
                                id={_id}
                                email={email}
                                type={user_type}
                                date={created_date}
                            />)
                    })}
                </Row>
            </div>
            <div className="d-flex justify-content-center mb-4">
                <button type="button"
                    className="btn btn-outline-primary rounded-pill px-5"
                    onClick={() => navigate("/admin/user/manage-users")}>
                    view all users
                </button>
            </div>
        </CardLayout>
    )
}

export default UsersList
