import React from 'react'
import InfoDetails from './InfoDetails'
import { Card } from 'react-bootstrap'
function OverviewContents({ details }) {
    const { name, nric, phone, address,
        discipline, expertise, role } = details.fellow_desc
    return (
        <Card className="border-0 my-4">
            <Card.Header className="bg-white p-4">
                <h3 className="m-0">Profile Details</h3>
            </Card.Header>
            <Card.Body>
                <InfoDetails label="Full Name" name={name} />
                <InfoDetails label="MyKad Number" name={nric} />
                <InfoDetails label="Phone Number" name={name} />
                <InfoDetails label="Address" name={phone} />
                <InfoDetails label="Current Address" name={address} />
                <InfoDetails label="Discipline" name={discipline} />
                <InfoDetails label="Expertise" name={expertise} />
                <InfoDetails label="Role" name={role} />
            </Card.Body>
        </Card>
    )
}

export default OverviewContents
