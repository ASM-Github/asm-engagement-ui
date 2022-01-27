import React from 'react'
import { useFellowScore } from './../../../../hooks/useFellow';
import { isAuth } from './../../../../auth/Login/helpers';
import Spinner from './../../../../components/spinner/Spinner';
import Welcome from './Welcome';

function WelcomeAPI() {

    const { fellow_desc } = isAuth()
    const { isLoading, isError, data } = useFellowScore(fellow_desc);
    console.log(data)

    return (
        <>
            {isLoading && <Spinner />}
            {isError && <div>Unable to fetch the fellow score</div>}
            {data && <Welcome totalScore={data.score} />}
        </>
    )
}

export default WelcomeAPI
