import React from 'react'
import ManageRequests from './Index'
import { useProgramReqs } from './../../../../../hooks/useRequests';
import Spinner from './../../../../../components/spinner/Spinner';

function RequestsListAPI() {
    const { isLoading, isError, data } = useProgramReqs()
    return (
        <>
            {isLoading && <Spinner />}
            {isError && <div>Error</div>}
            {data && <ManageRequests programs={data} />}
        </>
    )
}

export default RequestsListAPI
