import { useHistory } from 'react-router-dom';
import React from 'react';
import moment from 'moment';

// import components
import FetchAPI from '../../hooks/fetchAPI';
import Card from '../../components/card/card'
import CardTitle from './CardTitle'
import DialogDelete from './DeleteConfirmation';
import AddActivity from './AddFellow';
// import bootstrap components
import Table from 'react-bootstrap/Table';
// import styles
import '../../assets/css/table.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgramDataService from '../../services/Program'
// import const var
import { FETCH_API_FELLOWLIST } from '../../utils/const-API'

function ListFellow() {

    let history = useHistory();

    const { loading, error, data } = FetchAPI(FETCH_API_FELLOWLIST);

    const totalData = data.length;
    let number = 1;

    if (loading) return <p>Loading the data</p>
    if (error) return <p>Failed to fetch the data</p>


    const AddActivityButton = (uid) => {
        history.push('/add-activity/' + uid)
    }

    return (
        <div>
            <Card>
                <CardTitle
                    title="manage fellows"
                    description="Create, Update and Delete a program"
                    btnName="Add Fellow"
                />
                <Table hover>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>IC Number</th>
                            <th>Phone Number</th>
                            <th>Discipline</th>
                            <th>Expertise</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data.map(fellow =>
                        (
                            <tr key={fellow._id}>
                                <td>{number++}.</td>
                                <td>{fellow.name}</td>
                                <td>{fellow.nric}</td>
                                <td>{fellow.phone}</td>
                                <td>{fellow.discipline}</td>
                                <td>{fellow.expertise}</td>
                                <td>
                                    <span>
                                        <i className='bx bx-edit-alt bx-tada-hover bx-border-circle' ></i>
                                        <span style={{ marginRight: 10 + 'px' }}></span>
                                        <DialogDelete id={fellow._id} />
                                        <span style={{ marginRight: 10 + 'px' }}></span>
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

export default ListFellow;

