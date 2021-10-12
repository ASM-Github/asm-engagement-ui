import React from 'react';

function Dialog() {
    return (
        <>
            <div className="d-flex justify-content-center">
                <i className='bx bx-x bx-border-circle icon-delete bx-flashing'></i>
            </div>
            <h1 className="dialog-title text-muted">
                Are you sure?
            </h1>
            <p className="text-muted dialog-subtitle">
                Do you really want to delete this user? This process cannot be undone
            </p>
        </>
    );
}
export default Dialog;