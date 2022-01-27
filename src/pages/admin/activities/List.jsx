import React from 'react'
import Table from './components/list/Index'
import Spinner from '../../../components/spinner/Spinner';
import { useActivitiesList } from '../../../hooks/useActivities';

function IndexActivity() {
    const { isLoading, isError, data: activities } = useActivitiesList()
    return (
        <>
            {isLoading && <Spinner />}
            {isError && <div>Error</div>}
            {activities &&
                <Table activities={activities} />
            }
        </>
    )
}

export default IndexActivity
