import React from 'react'
import Table from './Index'
import Spinner from '../../../../../components/spinner/Spinner';
import { useActivityReqs } from '../../../../../hooks/useRequests';

function PendingActivitiesAPI() {

    const { isLoading, isError, data: activities } = useActivityReqs()

    //console.log(activities)
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

export default PendingActivitiesAPI;
