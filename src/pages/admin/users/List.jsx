import React from 'react';
import Table from './components/list/Index';
import Spinner from '../../../components/spinner/Spinner';
import { useUsersList } from '../../../hooks/useUsers';

function Manage() {
    const { isLoading, isError, data: users } = useUsersList()

    return (
        <>
            {isLoading && <Spinner />}
            {isError && <div>Unable to fetch the data</div>}
            {users && <Table users={users} />}

        </>
    )
}

export default Manage
