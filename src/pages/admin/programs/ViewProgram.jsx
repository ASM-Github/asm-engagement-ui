import React from 'react'
import { useParams } from 'react-router-dom';
import ProgramLayout from './layout/ViewProgram';
import Spinner from './../../../components/spinner/Spinner';
import { useProgram } from './../../../hooks/useProgram';

function ViewProgramAPI() {

    let { id } = useParams();
    const { isLoading, isError, data } = useProgram(id)

    return (
        <>
            {isLoading && <Spinner />}
            {isError && <div>{id}</div>}
            {data && <ProgramLayout program={data} />}
        </>
    )
}

export default ViewProgramAPI