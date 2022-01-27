import React from 'react'
import { useParams } from 'react-router-dom';
import ViewUser from './layout/User'
import useFetch from '../../../hooks/useFetch';
import Spinner from '../../../components/spinner/Spinner';

function View() {

    let { id } = useParams();
    const { isPending, error, data: user } = useFetch(
        `http://localhost:8080/api/users/viewdetails/${id}`
    )
    return (
        <>
            {error && <div>{error}</div>}
            {isPending && <Spinner />}
            {user && <ViewUser user={user} />}
        </>
    )
}

export default View
