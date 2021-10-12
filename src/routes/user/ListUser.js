import { useHistory } from 'react-router-dom';
import React from 'react';
import moment from 'moment';
// import components
import FetchAPI from '../../hooks/fetchAPI';
import Card from '../../components/card/card'
import CardTitle from './CardTitle'
import DialogDelete from './DeleteConfirmation';
import AddUser from './AddUser';
import Pagination from './Pagination';
// import bootstrap components
import Table from 'react-bootstrap/Table';
// import styles
import '../../assets/css/table.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgramDataService from '../../services/Program'
// import const var
import { FETCH_API_USERLIST } from '../../utils/const-API'

function ListUser() {
    let history = useHistory();

    const { loading, error, data } = FetchAPI(FETCH_API_USERLIST);

    if (loading) return <p>Loading the data</p>
    if (error) return <p>Failed to fetch the data</p>

    const totalData = data.length;
    let number = 1;

    const AssignFellow = (uid) => {
        history.push('/user/assign/' + uid)
    }

    return (
        <div>
            <Card>
                <CardTitle
                    title="manage users"
                    description="Create, Update and Delete a user"
                    btnName="Add User"
                />
                <Table hover>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Email</th>
                            <th>Type of User</th>
                            <th>Created Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(user =>
                            (
                                <tr key={user._id}>
                                    <td>{number++}.</td>
                                    <td>{user.email}</td>
                                    <td>{user.user_type}</td>
                                    <td>
                                        {moment(user.created_date).calendar()}
                                    </td>
                                    <td>
                                        <span>
                                            <i
                                                className='bx bx-edit-alt bx-tada-hover bx-border-circle'
                                            ></i>
                                            <span
                                                style={{ marginRight: 10 + 'px' }}>
                                            </span>
                                            <DialogDelete id={user._id} />
                                            <span
                                                style={{ marginRight: 10 + 'px' }}>
                                            </span>
                                            <i
                                                className='bx bx-right-arrow-alt bx-border-circle bx-fade-right-hover'
                                                onClick={() => AssignFellow(user._id)}
                                            ></i>
                                        </span>
                                    </td>
                                </tr>

                            ))}
                    </tbody>
                </Table>
                <div className="d-flex justify-content-between">
                    <div className="p-2 bd-highlight">
                        <p className="total-data text-muted">Total data : {totalData}</p>
                    </div>
                    <div className="p-2 bd-highlight"></div>
                    <div className="p-2 bd-highlight">
                        <Pagination />
                    </div>
                </div>


            </Card>
        </div >
    )
}

export default ListUser;

