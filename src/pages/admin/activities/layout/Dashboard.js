import React from 'react'
import { Row } from 'react-bootstrap'
import ManageActivity from '../components/recent-added/Index'
import PendingActivity from '../components/pending-reqs/Index'
function MainActivitiesLayout() {
    return (
        <Row>
            <PendingActivity title="pending requests" />
            <ManageActivity title="manage activities" />
        </Row>
    )
}

export default MainActivitiesLayout
