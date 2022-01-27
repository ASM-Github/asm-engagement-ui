import React from 'react';

function Card(props) {
    const { title, total, children } = props
    return (
        <div className="card border-0 mb-5">
            <div className="d-flex justify-content-between align-items-center">
                <div className="card-header bg-white py-4 border-bottom-0">
                    <h4 className="mb-0 text-capitalize fw-bold">{title}</h4>
                    <small className="fw-bold text-primary">
                        Total users : {total}
                    </small>
                </div>
                <div></div>
                <div>

                </div>
            </div>
            {children}
        </div>
    )
}

export default Card