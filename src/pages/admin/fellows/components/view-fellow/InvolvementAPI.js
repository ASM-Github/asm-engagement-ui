import React from 'react';
import { useParams } from 'react-router-dom'
import Involvement from './Involvement'
import { useInvolvementByFID } from '../../../../../hooks/useFellow'
import Spinner from '../../../../../components/spinner/Spinner'

function InvolvementAPI() {

    const { id } = useParams();
    const { isLoading, isError, data: involvement } = useInvolvementByFID(id);

    return (
        <>
            {isLoading && <Spinner />}
            {isError && <p>Failed to fetch data</p>}
            {involvement && <Involvement involvement={involvement} />}
        </>
    )
}

export default InvolvementAPI;
