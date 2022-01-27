import React from 'react'
import OverviewBody from './components/OverviewBody';
import { isAuth } from './../../../auth/Login/helpers';
import { useUser } from './../../../hooks/useUser';

function Overview() {
    const { _id } = isAuth()
    const { isLoading, isError, data: details } = useUser(_id)
    return (
        <>
            {isLoading && null}
            {isError && <div>Error</div>}
            {details && <OverviewBody details={details} />}
        </>
    )
}

export default Overview
