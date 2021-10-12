import React from 'react';
function Content() {
    return (
        <>
            <div className="modal-container">
                <div className="d-flex justify-content-center">
                    <i className='bx bx-check-double icon-success bx-tada bx-border-circle'></i>
                </div>
                <h1 className="dialog-title text-muted">
                    Success
                </h1>
                <p className="dialog-subtitle text-muted">
                    Fellow details have been assigned to the current user.
                </p>
            </div>
        </>
    )
}

export default Content