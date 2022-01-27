import React from 'react'
import { useNavigate } from 'react-router-dom';

function PrivateError() {
    let navigate = useNavigate();
    return (
        <>
            <h1>
                CANNOT ACCESS
            </h1>
            <button onClick={() =>
                navigate('/')}>
                go to login
            </button>
        </>
    )
}

export default PrivateError
