import React from 'react'
import Action from './action'
import { management } from './actionDATA';
import { Row } from 'react-bootstrap';
function UsersCount() {
    return (
        <div>
            <div className="mb-3">
                <h4 className="mb-0">
                    Management
                </h4>
                <small className="text-muted fw-normal">
                    Create and view users
                </small>
            </div>
            <div className="d-flex">
                <div className="flex-grow-1">
                    <Row>
                        {
                            management.map(i => (
                                <Action
                                    key={i.id}
                                    id={i.id}
                                    title={i.title}
                                    sub={i.desc}
                                    btn={i.btn}
                                    color={i.color}
                                    icon={i.icon}
                                    url={i.url} />
                            ))
                        }
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default UsersCount
