import React from 'react'
import PendingPrograms from './Index'
import { useProgramReqByID } from '../../../../../hooks/useRequest';
import { isAuth } from '../../../../../auth/Login/helpers';
import Spinner from '../../../../../components/spinner/Spinner';

function API() {
    const { fellow_desc } = isAuth();
    const { isLoading, isError, data } = useProgramReqByID(fellow_desc);

    return (
        <>
            {isLoading && <Spinner />}
            {isError && <div>Error</div>}
            {data && <PendingPrograms programs={data} />}
        </>
    )
}

export default API
