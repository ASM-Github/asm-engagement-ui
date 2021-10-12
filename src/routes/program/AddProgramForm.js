import React, { useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import ActivityDataService from '../../services/Program';
import '../../assets/css/cards.css';
import '../../assets/css/reusable-components.css';

const AddForm = () => {
    const initialActivityState = {
        _id: null,
        topic: "",
        start_date: "",
        end_date: ""
    };
    const [activity, setActivity] = useState(initialActivityState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    };

    const saveActivity = () => {
        var data = {

            topic: activity.topic,
            start_date: activity.start_date,
            end_date: activity.end_date
        };

        ActivityDataService.create(data)
            .then(response => {
                setActivity({
                    topic: response.data.topic,
                    start_date: response.data.start_date,
                    end_date: response.data.end_date,
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
                    Add a new Program
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
                                    Program
                                    <strong> successfully </strong>
                                    added !
                                </div>
                            </div>
                            <div className="d-grid gap-2">
                                <button className="abtn abtn-primary" onClick={newActivity}>
                                    Add a another Program
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="mb-3">
                                <label
                                    className="form-label">
                                    Topic
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    required
                                    value={activity.topic}
                                    onChange={handleInputChange}
                                    name="topic"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    className="form-label">
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="activity_type"
                                    required
                                    value={activity.start_date}
                                    onChange={handleInputChange}
                                    name="start_date"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    className="form-label"
                                >
                                    Hours
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="hours"
                                    required
                                    value={activity.end_date}
                                    onChange={handleInputChange}
                                    name="end_date"
                                />
                            </div>
                            <div className="d-grid gap-2">
                                <button onClick={saveActivity} className="abtn abtn-primary">
                                    Add Program
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
