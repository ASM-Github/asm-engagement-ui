import React from 'react'
import Fellow from './PerformanceList';
import Spinner from './../../../../components/spinner/Spinner';
import { useScores } from './../../../../hooks/useScores';

function Fellowlist() {

    const { isLoading, isError, data: scores } = useScores()

    return (
        <>
            {isLoading && <Spinner />}
            {isError && <div>Error</div>}
            {scores &&
                <Fellow scores={scores} />}
        </>
    )
}

export default Fellowlist;