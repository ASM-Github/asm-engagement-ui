import React from 'react';
// import components
import Performance from '../components/Performance'

import AddActivityButton from '../../../routes/activity/AddActivityButton'

function Dashboard() {
    return (
        <>
            <div className="container">
                <Performance />
                <div class="d-flex justify-content-center">
                    <AddActivityButton name="Add Activity" />
                </div>
            </div>

        </>
    )
}

export default Dashboard;