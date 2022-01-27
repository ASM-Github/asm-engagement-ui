import React from 'react'
import { Card, Placeholder } from 'react-bootstrap'
function LoadingProfileHeader() {
    return (
        <Card className="border-0 mt-4 p-4">
            <div className="d-flex">
                <div className="me-4">
                    <div className="bg-black opacity-25 rounded-circle"
                        style={{
                            height: 10 + 'rem', width: 10 + 'rem',
                        }}>

                    </div>
                </div>
                <div className="flex-grow-1">
                    <div className="justify-content-between">
                        <div className="flex-column">
                            <div>
                                <Placeholder as={Card.Title} animation="glow">
                                    <Placeholder xs={4} />
                                </Placeholder>
                            </div>
                            <Placeholder as={Card.Text} animation="glow">
                                <Placeholder xs={1} /> <Placeholder xs={1} /> <Placeholder xs={1} />

                            </Placeholder>
                        </div>
                    </div>
                </div>
            </div>
            <Placeholder.Button xs={3} aria-hidden="true" className="mt-4" />
        </Card>
    )
}

export default LoadingProfileHeader
