import React from 'react'
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import ViewProfileHeader from './ViewProfileHeader';
import { isAuth } from './../../auth/Login/helpers';
import useFetch from './../../hooks/useFetch';
import Spinner from './../../components/spinner/Spinner';

function ViewProfile() {

    const { _id } = isAuth()
    const URL = `http://localhost:8080/api/users/viewdetails/${_id}`
    const { isPending, error, data: details } = useFetch(URL)
    return (
        <>
            {isPending && <Spinner />}
            {details && <ViewProfileHeader details={details} />}
        </>
    )
}

export default ViewProfile
