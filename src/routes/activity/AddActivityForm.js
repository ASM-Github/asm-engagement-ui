import React, { useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import ActivityDataService from '../../services/Activity';
import '../../assets/css/cards.css';
import '../../assets/css/reusable-components.css';

const AddForm = () => {
    const initialActivityState = {
        _id: null,
        description: "",
        activity_type: "",
        hours: ""
    };
    const [activity, setActivity] = useState(initialActivityState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    };

    const saveActivity = () => {
        var data = {
            description: activity.description,
            activity_type: activity.activity_type,
            hours: activity.hours
        };

        ActivityDataService.create(data)
            .then(response => {
                setActivity({
                    description: response.data.description,
                    activity_type: response.data.activity_type,
                    hours: response.data.hours,
                });
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

    return (
        <div>

            <div className="custom-cards-body">

                <h4 className="custom-cards-title center">
                    Add a new activity
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
                                    The activity
                                    <strong> successfully </strong>
                                    added!
                                </div>
                            </div>
                            <div className="d-grid gap-2">
                                <button className="abtn abtn-primary" onClick={newActivity}>
                                    Register another activity
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="mb-3">
                                <label
                                    className="form-label">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={activity.description}
                                    onChange={handleInputChange}
                                    name="description"
                                    placeholder="Enter title of activity"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    className="form-label">
                                    Type of Activity
                                </label>
                                <select className="form-select"
                                    onChange={handleInputChange}
                                    value={activity.activity_type}
                                    name="activity_type"
                                >
                                    <option
                                        selected
                                        style={{ fontWeight: 'bold' }}
                                        className="text-muted"
                                    >
                                        -- Please choose type of activity --
                                    </option>
                                    <option value="meeting">
                                        Meeting
                                    </option>
                                    <option value="presentation">
                                        Presentation
                                    </option>
                                    <option value="event">
                                        Event
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
                                    type="number"
                                    min="1"
                                    max="24"
                                    className="form-control"
                                    value={activity.hours}
                                    onChange={handleInputChange}
                                    name="hours"
                                    placeholder="Enter an hours"
                                />
                            </div>
                            <div className="d-grid gap-2">
                                <button onClick={saveActivity} className="abtn abtn-primary">
                                    Add Activity
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
