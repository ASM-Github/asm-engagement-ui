import { useHistory } from 'react-router-dom';
import React from 'react';
import moment from 'moment';
// import components
import FetchAPI from '../../hooks/fetchAPI';
import Card from '../../components/card/card'
import CardTitle from './CardTitle'
import DialogDelete from './DeleteConfirmation';
import AddUser from './AddActivity';
// import bootstrap components
import Table from 'react-bootstrap/Table';
// import styles
import '../../assets/css/table.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgramDataService from '../../services/Program'
// import const var
import { FETCH_API_ACTIVITYLIST } from '../../utils/const-API'

function ListUser() {
    let history = useHistory();

    const { loading, error, data } = FetchAPI(FETCH_API_ACTIVITYLIST);

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
                    title="manage activities"
                    description="Create, Update and Delete a activity"
                    btnName="Add activity"
                />
                <Table hover>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Description</th>
                            <th>Type of activity</th>
                            <th>Hours</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(activity =>
                            (
                                <tr key={activity._id}>
                                    <td>{number++}</td>
                                    <td>{activity.description}</td>
                                    <td>{activity.activity_type}</td>
                                    <td>
                                        {activity.hours}
                                    </td>
                                    <td>
                                        <span>
                                            <i
                                                className='bx bx-edit-alt bx-tada-hover bx-border-circle'
                                            ></i>
                                            <span
                                                style={{ marginRight: 10 + 'px' }}>
                                            </span>
                                            <DialogDelete id={activity._id} />
                                            <span
                                                style={{ marginRight: 10 + 'px' }}>
                                            </span>
                                        </span>
                                    </td>
                                </tr>

                            ))}
                    </tbody>
                </Table>
                <p className="total-data text-muted">Total data : {totalData}</p>
            </Card>
        </div >
    )
}

export default ListUser;

