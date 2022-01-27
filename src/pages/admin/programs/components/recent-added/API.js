import React from 'react'
import Main from './Index'
import { useProgramsList } from '../../../../../hooks/usePrograms';
import Spinner from './../../../../../components/spinner/Spinner';

function RecentAddedAPI() {
    const { isLoading, isError, data: programs } = useProgramsList()
    return (
        <>
            {isLoading && <Spinner />}
            {isError && <div>Unable to fetch the data</div>}
            {programs && <Main programs={programs} />}
        </>
    )
}

export default RecentAddedAPI
