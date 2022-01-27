import React from 'react';
import { Container } from 'react-bootstrap';
import CardsList from './components/Counters';
import Performance from './layout/Performance';
import './dashboard.css'
import '../../../assets/css/icons.css'
function Dashboard() {
    return (
        <Container>
            <CardsList />
            <Performance />
        </Container>
    )
}

export default Dashboard
