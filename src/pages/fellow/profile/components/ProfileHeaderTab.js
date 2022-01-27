import React from 'react'
import { NavLink } from 'react-router-dom'
function FellowProfileHeaderTab() {
    return (
        <div className="mt-4">
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <NavLink className="nav-link" to='/fellow/view-profile/overview' aria-current="page">
                        Overview
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/fellow/view-profile/programs' aria-current="page">
                        Programs
                    </NavLink>
                </li>
                {/* <li className="nav-item">
                    <NavLink className="nav-link" to='/fellow/view-profile/activities' aria-current="page">
                        Activities
                    </NavLink>
                </li> */}
                <li className="nav-item">
                    <NavLink className="nav-link" to='/fellow/view-profile/settings' aria-current="page">
                        Settings
                    </NavLink>
                </li>
            </ul>
        </div >

    )
}

export default FellowProfileHeaderTab
