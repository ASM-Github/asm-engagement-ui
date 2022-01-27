import React from 'react'

function Activity({ title, desc }) {
    const firstLetter = title.slice(0, 1)
    return (
        <div className="d-flex align-items-center mb-4">
            <div className="asm-alpha-icons-4">
                {firstLetter}
            </div>
            <div className="flex-grow-1 ms-4">
                <div className="flex-column">
                    <h6 className="mb-1 fw-bold">
                        {title}
                    </h6>
                    <small>
                        {desc}
                    </small>
                </div>
            </div>
        </div>
    )
}

export default Activity
