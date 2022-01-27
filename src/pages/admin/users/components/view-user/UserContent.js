import React from 'react';

function UserContent({ userDetails }) {

    const { email, user_type } = userDetails;
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
            <small></small>
        </div>
    )
}

export default UserContent;
