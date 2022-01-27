import React from 'react'
import EventBody from './EventBody'

function Event() {
    return (
        <div className="card mb-4">
            <div className="cs-card-body">
                <div className="d-flex justify-content-between">
                    <div>
                        <h4 className="aa-cards-title">
                            Event Today
                        </h4>
                        <EventBody />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event

