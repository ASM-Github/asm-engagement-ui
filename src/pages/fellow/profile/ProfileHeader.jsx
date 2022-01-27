import React from 'react'
import { Container } from 'react-bootstrap';
import Placeholder from './components/ProfileHeaderPlaceholder'
import { isAuth } from '../../../auth/Login/helpers';
import { useUser } from '../../../hooks/useUser';
import FellowProfileHeader from './components/ProfileHeaderContent';

function ProfileHeader({ children }) {
    const { _id } = isAuth()
    const { isLoading, data: profile, isError, } = useUser(_id)
    return (
        <Container>
            {isLoading && <Placeholder />}
            {isError && <div>error</div>}
            {profile && <FellowProfileHeader details={profile} />}
            {children}
        </Container>
    )
}

export default ProfileHeader