import React from 'react'
import { Card, } from 'react-bootstrap'
import { isAuth } from './../../../../auth/Login/helpers';
function Welcome({ totalScore }) {
    return (
        <Card className="p-5 asm-bg-primary-2 border-0">
            <h4 className="fw-bolder text-primary mb-3 ">
                {`Welcome back ${isAuth().name}`}
            </h4>
            <p className="mb-0">
                My score :
                <span className="fw-bolder">
                    {` ${(totalScore) && totalScore}`}
                </span>
            </p>
        </Card>
    )
}

export default Welcome
