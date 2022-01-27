import React from 'react'
import Layout from './Layout/Dashboard'
import Spinner from '../../../components/spinner/Spinner';
import { useFellowsList } from '../../../hooks/useFellows';

function Fellows() {
    const { isLoading, isError, data: fellows } = useFellowsList()
    console.log(fellows)
    return (
        <>
            {isLoading && <Spinner />}
            {isError && <div>Error</div>}
            {fellows && <Layout fellows={fellows} />}
        </>
    )
}

export default Fellows
