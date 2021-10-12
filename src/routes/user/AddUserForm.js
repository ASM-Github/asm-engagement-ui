import React, { useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import UserDataService from '../../services/User';
import '../../assets/css/cards.css';
import '../../assets/css/reusable-components.css';

const AddForm = () => {
    const initialActivityState = {
        _id: null,
        email: "",
        user_type: "",
        password: ""
    };
    const [user, setUser] = useState(initialActivityState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const saveActivity = () => {
        var data = {
            email: user.email,
            user_type: user.user_type,
            password: user.password
        };

        UserDataService.create(data)
            .then(response => {
                setUser({
                    email: response.data.email,
                    user_type: response.data.user_type,
                    password: response.data.password,
                });
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

    return (
        <div>

            <div className="custom-cards-body">

                <h4 className="custom-cards-title center">
                    Add a new User
                </h4>
                <p className="custom-cards-desc center">

                </p>
                <div>
                    {submitted ? (
                        <div>
                            <div class="alert alert-success d-flex align-items-center" role="alert">
                                <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:">
                                    <BsCheckCircle size='1.5rem' />
                                </svg>
                                <div className="kFont-Manrope">
                                    The user
                                    <strong> successfully </strong>
                                    registered !
                                </div>
                            </div>
                            <div className="d-grid gap-2">
                                <button className="abtn abtn-primary" onClick={newUser}>
                                    Register another User
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="mb-3">
                                <label
                                    className="form-label">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    required
                                    value={user.email}
                                    onChange={handleInputChange}
                                    name="email"
                                    placeholder="user@akademisans.gov.my"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    className="form-label">
                                    Type of User
                                </label>
                                <select className="form-select"
                                    onChange={handleInputChange}
                                    value={user.user_type}
                                    name="user_type"
                                >
                                    <option
                                        selected
                                        style={{ fontWeight: 'bold' }}
                                        className="text-muted"
                                    >
                                        -- Please choose type of user --
                                    </option>
                                    <option value="admin">
                                        Admin
                                    </option>
                                    <option value="fellow">
                                        Fellow
                                    </option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label
                                    className="form-label"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="hours"
                                    required
                                    value={user.password}
                                    onChange={handleInputChange}
                                    name="password"
                                    placeholder="Enter a strong password"
                                />
                            </div>
                            <div className="d-grid gap-2">
                                <button onClick={saveActivity} className="abtn abtn-primary">
                                    Register User
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AddForm;
