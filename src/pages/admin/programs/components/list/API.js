import React from 'react'
import { Container } from 'react-bootstrap';
import Table from './Index';
import Spinner from '../../../../../components/spinner/Spinner';
import { useProgramsList } from '../../../../../hooks/usePrograms';

function Manage() {
    const { isLoading, isError, data: programs } = useProgramsList()
    return (
        <>
            {isLoading && <Spinner />}
            {isError && <div>Error</div>}
            {programs &&
                <Container className="mb-5">
                    <h3 className="fw-bolder mb-4">
                        Manage Programs
                    </h3>
                    <Table fellows={programs} />
                </Container>
            }
        </>
    )
}

export default Manage