import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import EditProfileForm from './components/EditProfileForm';
import useFetch from '../../../hooks/useFetch';
import Spinner from '../../../components/spinner/Spinner';
import EditProfileFormLeft from './components/EditProfileFormLeft';
import { isAuth } from './../../../auth/Login/helpers';

function EditProfile() {
    const { _id } = isAuth()
    const URL = `http://localhost:8080/api/users/viewdetails/${_id}`
    const { isPending, error, data: user } = useFetch(URL)
    return (
        <>
            <Container>
                {isPending && <Spinner />}
                {error && <div>Unable to fetch the data</div>}
                {user && <Card className="border-0 my-4">
                    <Card.Header className="bg-white py-3">
                        <h3 className="fw-bolder mb-0">Edit Profile</h3>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={3} className="border-end">
                                <EditProfileFormLeft user={user} />
                            </Col>
                            <Col md={8} className="ms-5 ">
                                <EditProfileForm fellowDesc={user.fellow_desc} />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>}
            </Container>
        </>
    )
}

export default EditProfile
