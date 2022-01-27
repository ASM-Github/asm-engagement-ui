import React from 'react'
import Spinner from '../../../components/spinner/Spinner';
import Layout from './layout/Dashboard';
import { useUsersList } from '../../../hooks/useUsers';

function Index() {
    const { isLoading, isError, data } = useUsersList()
    return (
        <>
            {isLoading && <Spinner />}
            {isError && <div>Error</div>}
            {data && <Layout users={data} />}
        </>
    )
}

export default Index
