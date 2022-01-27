import React from 'react';
import { format } from 'date-fns';

function UserContent({ userDetails }) {

    const { email, user_type, created_date } = userDetails;
    const nameIcon = email.slice(0, 1);

    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="asm-alpha-icons-6 fw-bolder text-black text-uppercase">
                    {nameIcon}
                </div>
            </div>
            <h4 className="text-center text-primary mt-4">{email}</h4>
            <div className="d-flex justify-content-center">
                <span className="badge bg-dark mt-2">{user_type}</span>
            </div>
            <div className="d-flex justify-content-center mt-3">
                <span className="text-black-50">Created Date : {format(new Date(created_date), 'PPPP')}</span>
            </div>
            <div className="d-flex justify-content-center mt-2">
                <button type="button" className="btn btn-secondary">Edit Auth</button>
            </div>
        </div>
    )
}

export default UserContent;
