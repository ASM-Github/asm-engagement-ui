import React from 'react';
// import componensts
import Card from '../../components/card/card';
import CardTitle from './AddActivityTitle';
//import styles
import '../../assets/css/cards.css';
import '../../assets/css/reusable-components.css';

function AddActivity(props) {

    let id = props.match.params.id;
    return (
        <div className="d-flex justify-content-center">
            <Card>
                <CardTitle
                    title="Add a New Activity"
                    description="This  activity will be added under the program"
                />
                <form>
                    <div className="mb-3">
                        <label
                            className="form-label">
                            Program ID
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={id}
                            disabled
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            className="form-label">
                            Description
                        </label>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            className="form-label">
                            Type of activity
                        </label>
                        <select className="form-select">
                            <option
                                style={{ fontWeight: 'bold' }}
                                className="text-muted"
                                defaultValue>
                                -- Please  choose type of activity --
                            </option>
                            <option value="presentation">Presentation</option>
                            <option value="presentation">Meeting</option>
                            <option value="event">Event</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label
                            className="form-label">
                            Hours
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            max="24"
                            min="1"
                        />
                    </div>
                    <div className="d-grid gap-2">
                        <button className="abtn abtn-primary">
                            Add Activity
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default AddActivity;