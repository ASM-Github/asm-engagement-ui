import React from 'react'
import ProgramContent from './components/ProgramContent'
import { isAuth } from './../../../auth/Login/helpers';
import { useUser } from '../../../hooks/useUser';

function Activities() {
    const { _id } = isAuth()
    const { isLoading, isError, data: details } = useUser(_id)
    return (
        <>
            {isLoading && null}
            {isError && <div>Unable to fetch data </div>}
            {details &&
                <ProgramContent
                    programs={details.fellow_desc.programs} />
            }
        </>
    )
}

export default Activities
