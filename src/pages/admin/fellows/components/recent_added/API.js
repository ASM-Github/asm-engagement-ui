import React from 'react'
import { useFellowsList } from './../../../../../hooks/useFellows';
import Spinner from './../../../../../components/spinner/Spinner';
import MainFellowsCard from './Index';

function MainFellowsAPI() {
    const { isLoading, isError, data: fellows } = useFellowsList()
    return (
        <>
            {isLoading && <Spinner />}
            {isError && <div>Error</div>}
            {fellows && <MainFellowsCard fellows={fellows} />}
        </>
    )
}

export default MainFellowsAPI
