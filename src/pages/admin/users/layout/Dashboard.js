import React from 'react'
import Header from './UserHeader';
import RecentAdded from '../components/recent_added/Index'
import { Container } from 'react-bootstrap';

function UsersMain({ users }) {
    return (
        <Container>
            <div className="mb-4">
                <Header users={users} />
            </div>
            <RecentAdded users={users} />
        </Container>
    )
}

export default UsersMain
