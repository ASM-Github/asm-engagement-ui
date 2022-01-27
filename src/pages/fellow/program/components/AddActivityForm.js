import React, { useState } from 'react';
import { BiTrashAlt } from 'react-icons/bi'
import { Formik, Form, FieldArray } from 'formik';
import { isAuth } from '../../../../auth/Login/helpers'
import { requestActivities } from '../../../../utils/AxiosService'

const initialValues = {
    activities: [
        {
            id: '',
        }
    ]
};

function JoinActitivityForm(props) {


    const [loading, setLoading] = useState(false);
    const { fellow_desc } = isAuth();
    const { activities, topic, setModal, programId } = props;
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {
                setLoading(true);
                requestActivities(fellow_desc, programId, values)
                    .then(function (response) {
                        setLoading(false)
                        setModal(false);
                    })
                    .catch(function (error) {
                        setLoading(false);
                    })
            }}
        >
            {({ values, handleChange }) => (
                <Form>
                    <label className="form-label mt-3">
                        Program Title
                    </label>
                    <input className="form-control asm-fw-500 border-0 py-2 text-opacity-75"
                        value={topic} disabled />
                    <FieldArray name="activities">
                        {({ remove, push }) => (
                            <div>
                                {values.activities.length > 0 &&
                                    values.activities.map((activity, index) => (
                                        <div className="row" key={index}>
                                            <label className='form-label mt-3'>Select Activity</label>
                                            <div className='d-flex'>
                                                {/* eslint-disable-next-line */}
                                                <select className='form-select' className='form-control'
                                                    name={`activities[${index}].id`}
                                                    placeholder="Jane Doe"
                                                    type="text"
                                                    onChange={handleChange}
                                                >
                                                    <option defaultValue>Please select the activity</option>
                                                    {
                                                        activities.map(activity => {
                                                            const { value, label } = activity;
                                                            return (
                                                                <option value={value} key={value}>{label}</option>
                                                            )
                                                        })
                                                    }
                                                </select>

                                                <button
                                                    type="button"
                                                    className="btn btn-danger ms-2"
                                                    onClick={() => remove(index)}
                                                >
                                                    <BiTrashAlt />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                <div className='d-flex justify-content-end'>
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary my-3 px-5"
                                        onClick={() => push({ id: '' })}
                                    >
                                        Add Activity
                                    </button>
                                </div>
                                <hr />
                            </div>
                        )}
                    </FieldArray>
                    <div className='d-grid'>
                        <button type="submit" className='btn btn-primary px-5 py-2'>
                            {loading ? 'Sending . .' : 'Send Request'}
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default JoinActitivityForm;
