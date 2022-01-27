import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { BiMap } from 'react-icons/bi'
import { BsCreditCard2Front, BsPhone } from 'react-icons/bs'
import InvolvementAPI from './InvolvementAPI'
import ProfileAvatar from '../../../../../assets/images/blank-profile.png'

function FellowDetails({ fellow }) {

    const { name, discipline, expertise, address, nric, phone, programs } = fellow;
    const total_programs = programs.length;

    return (
        <>
            <Row>
                <Col md={8}>
                    <Card className="px-5 py-4 border-0">
                        <div className="d-flex">
                            <img src={ProfileAvatar} alt="profile-avatar" width="150" height="150"
                                className="rounded-3" />
                            <div className="flex-column ms-4">
                                <h3 className="fw-bold">{name}</h3>
                                <div className="d-flex gap-4">
                                    <span className="badge border text-primary">{discipline}</span>
                                    <span className="badge border text-danger">{expertise}</span>
                                </div>
                                <div className="mt-2">
                                    <BiMap className="text-primary" />
                                    <span className="ms-3">{address}</span>
                                </div>
                                <div className="mt-3 d-flex align-items-center">
                                    <h6><BsCreditCard2Front className="me-3 text-primary" />{nric}</h6>
                                    <h6><BsPhone className="mx-3 text-primary" />{phone}</h6>
                                </div>
                            </div>
                            <div className="ms-auto">
                                <button type="button" className="btn btn-primary">Edit Fellow</button>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="h-100 border-0">
                        <div className="text-center my-auto">
                            <h1>{programs.length}</h1>
                            <h3>{total_programs > 1 ? 'programs' : 'program'}</h3>
                        </div>
                    </Card>
                </Col>
            </Row>
            <InvolvementAPI />
        </>
    )
}

export default FellowDetails
