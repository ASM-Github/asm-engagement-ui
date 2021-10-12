import React from 'react';
// import componensts
import Card from '../../components/card/card';
import AddFellowForm from './AddFellowForm'
import SideAnimation from './SideFormAnimation';
//import bootstrap components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
//import styles
import '../../assets/css/cards.css';
import '../../assets/css/reusable-components.css';

function AddActivity() {

    return (
        <Card>
            <Row>
                <Col md={4}>
                    <SideAnimation />
                </Col>
                <Col md={8}>
                    <AddFellowForm />
                </Col>
            </Row>
        </Card>
    )
}

export default AddActivity;