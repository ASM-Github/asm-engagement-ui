import React, { useState } from 'react';
// import componensts
import Card from '../../components/card/card';
import CardTitle from '../../components/card/cardTitle';
import UserDataService from '../../services/User'
import FetchAPI from '../../hooks/fetchAPI';
import { FETCH_API_FELLOWLIST } from '../../utils/const-API'
import Content from './ModalContent';
// import bootstrap components
import Modal from 'react-bootstrap/Modal'
//import styles
import '../../assets/css/cards.css';
import '../../assets/css/reusable-components.css';

function Assign(props) {

    const { loading, error, data } = FetchAPI(FETCH_API_FELLOWLIST);

    const uid = props.match.params.id;

    const initialActivityState = {
        fellowId: ""
    };
    const [user, setUser] = useState(initialActivityState);
    const [submitted, setSubmitted] = useState(false);
    const [show, setShow] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const saveActivity = () => {
        var data = {
            fellowId: user.fellowId,
        };

        UserDataService.assign(uid, data)
            .then(response => {
                setUser({
                    fellowId: response.data.fellowId,
                });
                setShow(true);
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e.response);
            });
    };

    const newUser = () => {
        setUser(initialActivityState);
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
                            Assign as a fellow
                        </h4>
                        <p className="custom-cards-desc center">
                            Please choose fellow you want to assign.
                        </p>
                        <div>
                            <div>
                                <div class="mb-3">
                                    <label
                                        className="form-label">
                                        User ID
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
                                        This is display ID only. You cannot edit this User ID
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label
                                        className="form-label">
                                        Fellow Name
                                    </label>
                                    <select
                                        className="form-select"
                                        value={user.fellowId}
                                        onChange={handleInputChange}
                                        name="fellowId"
                                    >
                                        {
                                            data.map(f => (
                                                <option
                                                    key={f._id}
                                                    value={f._id}>
                                                    {f.name}
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