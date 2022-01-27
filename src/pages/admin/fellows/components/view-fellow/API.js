import React from 'react'
import { useParams } from 'react-router-dom'
import ViewFellow from './Fellow'
import { useFellowById } from '../../../../../hooks/useFellow'
import Spinner from './../../../../../components/spinner/Spinner';

function View() {

    let { id } = useParams();
    const { isLoading, isError, data: fellow } = useFellowById(id);

    return (
        <>
            {isLoading && <Spinner />}
            {isError && <p>Oops, someting went wrong. Please try again later.</p>}
            {fellow && <ViewFellow fellow={fellow} />}
        </>
    )
}

export default View
