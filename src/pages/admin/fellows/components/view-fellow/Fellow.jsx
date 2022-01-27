import React from 'react'
import {Container} from 'react-bootstrap'
import FellowDetailsCard from './FellowDetails'
function ViewFellow({fellow}) {
    return (
        <Container>
            <FellowDetailsCard fellow={fellow}/>
        </Container>
    )
}

export default ViewFellow
