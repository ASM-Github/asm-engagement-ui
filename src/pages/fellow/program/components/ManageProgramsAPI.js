import React from 'react'
import ManagePrograms from './ManagePrograms';
import { isAuth } from '../../../../auth/Login/helpers';
import { useFellowPrograms } from '../../../../hooks/useFellow'
import Spinner from '../../../../components/spinner/Spinner';

function ManageProgramAPI() {

    const { fellow_desc } = isAuth();
    const { isPending, error, data } = useFellowPrograms(fellow_desc)

    return (
        <div>
            {isPending && <Spinner />}
            {error && <div>Failed to fetch data</div>}
            {data && <ManagePrograms programs={data.programs} />}
        </div>
    )
}

export default ManageProgramAPI;
