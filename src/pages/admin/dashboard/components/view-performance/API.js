import React from 'react';
import FellowPerformanceList from './Table';
import { useScores } from '../../../../../hooks/useScores'
import Spinner from '../../../../../components/spinner/Spinner'

function API() {

    const { data: scores, isLoading, isError } = useScores();
    console.log(scores)
    return (
        <>
            {isLoading && <Spinner />}
            {isError && <p>Error</p>}
            {scores && <FellowPerformanceList scores={scores} />}
        </>
    )
}

export default API;
