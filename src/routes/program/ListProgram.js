import { useHistory } from 'react-router-dom';
import React from 'react';
import moment from 'moment';

// import components
import FetchAPI from '../../hooks/fetchAPI';
import Card from '../../components/card/card'
import CardTitle from './CardTitle'
import DialogDelete from './DeleteConfimation';
import AddActivity from './AddActivity';
// import bootstrap components
import Table from 'react-bootstrap/Table';
// import styles
import '../../assets/css/table.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgramDataService from '../../services/Program'
// import const var
import { FETCH_API_PROGRAMLIST } from '../../utils/const-API'

function ListProgram() {
    let history = useHistory();

    const { loading, error, data } = FetchAPI(FETCH_API_PROGRAMLIST);

    if (loading) return <p>Loading the data</p>
    if (error) return <p>Failed to fetch the data</p>

    const totalData = data.length;
    let number = 1;

    const AddActivityButton = (uid) => {
        history.push('/program/assign/' + uid)
    }


    return (
        <div>
            <Card>
                <CardTitle
                    title="manage programs"
                    description="Create, Update and Delete a program"
                    btnName="Add Program"
                />
                <Table hover>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Topic</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data.map(program =>
                        (
                            <tr key={program._id}>
                                <td>{number++}.</td>
                                <td>{program.topic}</td>
                                <td>{moment(program.start_date).format('DD MMMM YYYY')}</td>
                                <td>{moment(program.end_date).format('DD MMMM YYYY')}</td>
                                <td>
                                    <span>
                                        <i className='bx bx-edit-alt bx-tada-hover bx-border-circle' ></i>
                                        <span style={{ marginRight: 10 + 'px' }}></span>
                                        <DialogDelete id={program._id} />
                                        <span style={{ marginRight: 10 + 'px' }}></span>
                                        <i className='bx bx-calendar-plus bx-border-circle bx-tada-hover'
                                            onClick={() => AddActivityButton(program._id)}
                                        ></i>
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

export default ListProgram;

