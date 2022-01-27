import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Chart from '../components/user_chart/API'
import UserManagement from '../components/management/Index'

function UsersHeader({ users }) {
    return (
        <>
            <Row>
                <Col md={8}>
                    <Card className="p-4 h-100 border-0">
                        <UserManagement />
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="p-4 border-0">
                        <Chart />
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default UsersHeader
