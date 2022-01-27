import React from 'react'
import Spinner from '../../../components/spinner/Spinner';
import { useFellowsList } from '../../../hooks/useFellows';
import Table from './components/list/Index';

function Index() {
    const { isLoading, isError, data: fellows } = useFellowsList()
    return (
        <>
            {isLoading && <Spinner />}
            {isError && <div>Error</div>}
            {fellows && <Table fellows={fellows} />}
        </>
    )
}

export default Index