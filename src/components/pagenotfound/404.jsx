import React from 'react'
import { Card, Container } from 'react-bootstrap';
import './pagenotfound.css'
function PageNotFound404() {
    return (
        <Container>
            <Card>
                <p className="p-404">404</p>
                <p className="p-404-description">opss! page not found</p>
                <p className="p-404-explanation">
                    Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
                </p>
            </Card>
        </Container>
    )
}

export default PageNotFound404
