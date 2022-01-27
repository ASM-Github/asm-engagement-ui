import React from 'react'
import useFetch from '../../../../hooks/useFetch';
import AddActivitiyHeader from './AddActivityHeader';
import Spinner from '../../../../components/spinner/Spinner';
import { Container } from 'react-bootstrap';

function AddActivity() {
    const URL = 'http://localhost:8080/api/activities/lists/options';
    const { isPending, error, data: activities } = useFetch(URL)
    return (
        <Container>
            {isPending && <Spinner />}
            {error && <div>Error</div>}
            {activities && <AddActivitiyHeader activities={activities} />}
        </Container>
    )
}

export default AddActivity
