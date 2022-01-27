import React from 'react'
import { useUserChart } from '../../../../../hooks/useUsers'
import UserChart from './Index'
function UsersChartApi() {
    const { isLoading, isError, data } = useUserChart()
    return (
        <>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error</div>}
            {data &&
                <UserChart
                    label={data.label}
                    data={data.data} />}
        </>
    )
}

export default UsersChartApi
