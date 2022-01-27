import React from 'react'
import PendingPrograms from './Index'
import { useActivityReqbyFID } from '../../../../../hooks/useRequest';
import { isAuth } from '../../../../../auth/Login/helpers';
import Spinner from '../../../../../components/spinner/Spinner';

function API() {
    const { fellow_desc } = isAuth();
    const { isLoading, isError, data: pendingAct } = useActivityReqbyFID(fellow_desc);

    return (
        <>
            {isLoading && <Spinner />}
            {isError && <div>Error</div>}
            {pendingAct && <PendingPrograms programs={pendingAct} />}
        </>
    )
}

export default API
