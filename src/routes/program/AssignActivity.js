import React, { useState } from 'react';
// import componensts
import Card from '../../components/card/card';
import CardTitle from '../../components/card/cardTitle';
import ProgramDataService from '../../services/Program'
import FetchAPI from '../../hooks/fetchAPI';
import { FETCH_API_ACTIVITYLIST } from '../../utils/const-API'
import Content from './ModalContent';
// import bootstrap components
import Modal from 'react-bootstrap/Modal'
//import styles
import '../../assets/css/cards.css';
import '../../assets/css/reusable-components.css';

function Assign(props) {

    const { loading, error, data } = FetchAPI(FETCH_API_ACTIVITYLIST);

    const uid = props.match.params.id;

    const initialActivityState = {
        activityId: ""
    };
    const [activity, setActivity] = useState(initialActivityState);
    const [submitted, setSubmitted] = useState(false);
    const [show, setShow] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    };

    const saveActivity = () => {
        var data = {
            activityId: activity.activityId,
        };

        ProgramDataService.assign(uid, data)
            .then(response => {
                setActivity({
                    activityId: response.data.activityId,
                });
                setShow(true);
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e.response);
            });
    };

    const newActivity = () => {
        setActivity(initialActivityState);
        setSubmitted(false);
    };

    if (loading) return (<h1>Loading</h1>)
    if (loading) return (<h1>Error</h1>)

    return (
        <>
            <div class="d-flex justify-content-center">
                <Card>
                    <div className="custom-cards-body">
                        <h4 className="custom-cards-title center">
                            Attach Activity
                        </h4>
                        <p className="custom-cards-desc center">
                            Add activity to the program.
                        </p>
                        <div>
                            <div>
                                <div class="mb-3">
                                    <label
                                        className="form-label">
                                        Program ID
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control text-muted"
                                        disabled
                                        value={uid} />
                                    <div
                                        className="form-text"
                                        style={{
                                            fontStyle: 'italic'
                                        }}
                                    >
                                        This is display ID only. You cannot edit this Program ID
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label
                                        className="form-label">
                                        Activity Description
                                    </label>
                                    <select
                                        className="form-select"
                                        value={activity.activityId}
                                        onChange={handleInputChange}
                                        name="activityId"
                                    >
                                        {
                                            data.map(f => (
                                                <option
                                                    key={f._id}
                                                    value={f._id}>
                                                    {f.description}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="d-grid gap-2">
                                    <button onClick={saveActivity} className="abtn abtn-primary">
                                        Assign
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <Modal
                show={show}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    <i
                        className='bx bx-x icon-close'
                        onClick={() => setShow(false)}
                    >
                    </i>
                    <Content />
                    <button
                        onClick={() => setShow(false)}
                        className="abtn abtn-primary okay">
                        Okay
                    </button>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Assign;