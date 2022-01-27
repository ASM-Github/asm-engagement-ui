import React from 'react'
import RequestsList from './Index'
import { useProgramReqs } from './../../../../../hooks/useRequests';
import Spinner from './../../../../../components/spinner/Spinner';

function RequestsListAPI() {
    const { isLoading, isError, data: pendingProgramsList } = useProgramReqs()
    return (
        <>
            {isLoading && <Spinner />}
            {isError && <div>Error</div>}
            {pendingProgramsList && <RequestsList pendingProgramsList={pendingProgramsList} />}
        </>
    )
}

export default RequestsListAPI
