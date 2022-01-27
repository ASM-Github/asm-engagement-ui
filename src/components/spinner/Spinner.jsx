import React from 'react';

function Spinner() {
    return (
        <div className="position-relative" style={{
            marginTop: 19 + "rem"
        }}>
            <div className="position-absolute top-50 start-50 translate-middle">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Spinner;
