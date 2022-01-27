import React from 'react'
import RecentPrograms from './PendingProgramsCard'
import { useProgramReqByID } from '../../../../hooks/useRequest';
import { isAuth } from '../../../../auth/Login/helpers';
import Spinner from '../../../../components/spinner/Spinner';

function RecentProgramsAPI() {
    const { fellow_desc } = isAuth()
    const { isLoading, isError, data: programs } = useProgramReqByID(fellow_desc)
    return (
        <>
            {isLoading && <Spinner />}
            {isError && <div>Error</div>}
            {programs && <RecentPrograms programs={programs} />}
        </>
    )
}

export default RecentProgramsAPI
