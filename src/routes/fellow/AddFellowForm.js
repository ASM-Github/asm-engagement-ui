import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsCheckCircle } from 'react-icons/bs';
import FellowDataService from '../../services/Fellow';
//import bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../assets/css/cards.css';
import '../../assets/css/reusable-components.css';

const AddForm = () => {
    const initialActivityState = {
        _id: null,
        name: "",
        nric: "",
        phone: "",
        address: "",
        discipline: "",
        expertise: ""
    };
    const [fellow, setFellow] = useState(initialActivityState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFellow({ ...fellow, [name]: value });
    };

    const saveFellow = () => {
        var data = {
            name: fellow.name,
            nric: fellow.nric,
            phone: fellow.phone,
            address: fellow.address,
            discipline: fellow.discipline,
            expertise: fellow.expertise
        };

        FellowDataService.create(data)
            .then(response => {
                setFellow({
                    name: response.data.name,
                    nric: response.data.nric,
                    phone: response.data.phone,
                    address: response.data.address,
                    discipline: response.data.discipline,
                    expertise: response.data.expertise
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e.response);
            });
    };

    const newFellow = () => {
        setFellow(initialActivityState);
        setSubmitted(false);
    };

    return (
        <div>

            <div className="custom-cards-body">
                {submitted ? (
                    <div>

                        <div className="d-flex justify-content-center">
                            <Link to="/fellow">
                                <i className='bx bx-home-alt bx-border-circle icon-home'></i>
                            </Link>
                        </div>

                        <div class="alert alert-success d-flex align-items-center" role="alert">
                            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:">
                                <BsCheckCircle size='1.5rem' />
                            </svg>
                            <div className="kFont-Manrope">
                                The fellow
                                <strong> successfully </strong>
                                created!
                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <button className="abtn abtn-primary" onClick={newFellow}>
                                Create another fellow
                            </button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h4 className="custom-cards-title center">
                            add a new fellow
                        </h4>
                        <p className="custom-cards-desc center">
                            Fill in all the required form.
                        </p>
                        <div>
                            <div className="mb-3">
                                <label
                                    className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={fellow.name}
                                    onChange={handleInputChange}
                                    name="name"
                                    placeholder="Full Name"
                                />
                            </div>
                            <Row>
                                <Col md={6}>
                                    <div className="mb-3">
                                        <label
                                            className="form-label"
                                        >
                                            NRIC
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={fellow.nric}
                                            onChange={handleInputChange}
                                            name="nric"
                                            placeholder="Enter IC number without '-' or 'SPACE'"
                                        />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="mb-3">
                                        <label
                                            className="form-label"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={fellow.phone}
                                            onChange={handleInputChange}
                                            name="phone"
                                            placeholder="Enter phone number without '-' or 'SPACE'"
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <div className="mb-3">
                                        <label
                                            className="form-label"
                                        >
                                            Discipline
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={fellow.discipline}
                                            onChange={handleInputChange}
                                            name="discipline"
                                            placeholder="Enter displine"
                                        />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="mb-3">
                                        <label
                                            className="form-label"
                                        >
                                            Expertise
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={fellow.expertise}
                                            onChange={handleInputChange}
                                            name="expertise"
                                            placeholder="Enter expertise"
                                        />
                                    </div></Col>
                            </Row>
                            <div className="mb-3">
                                <label
                                    className="form-label"
                                >
                                    Address
                                </label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={fellow.address}
                                    onChange={handleInputChange}
                                    name="address"
                                    placeholder="Enter full address">
                                </textarea>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button onClick={saveFellow} className="abtn abtn-primary">
                                    Create fellow
                                </button>
                            </div>
                        </div>

                    </div>
                )}
            </div>

        </div>
    );
};

export default AddForm;
