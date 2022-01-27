import React from 'react'
import { useActivityReqbyFID } from './../../../../hooks/useRequest';
import { isAuth } from './../../../../auth/Login/helpers';
import Spinner from './../../../../components/spinner/Spinner';
import PendingActivitiesCard from './PendingActivitiesCard';

function PendingActivitiesAPI() {
    const { fellow_desc } = isAuth();
    const { isLoading, isError, data: activities } = useActivityReqbyFID(fellow_desc);
    return (
        <div>
            {isLoading && <Spinner />}
            {isError && <div>Error</div>}
            {activities && <PendingActivitiesCard activities={activities} />}
        </div>
    )
}

export default PendingActivitiesAPI
