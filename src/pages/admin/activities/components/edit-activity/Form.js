import React, { useState } from 'react'
import { useFormik } from 'formik'
import { toast, ToastContainer } from 'react-toastify'
import { useQueryClient } from 'react-query'
import { ImSpinner2 } from 'react-icons/im'
import { updateActivity } from '../../../../../utils/AxiosService'
import { ActivitySchema } from '../../validation/ActivityValidation'

function EditActivityForm({ activity, handleClose, setShow }) {

    let queryClient = useQueryClient();
    const VALID = 'form-control';
    const INVALID = 'form-control is-invalid';
    const { _id, activity_type, description, score } = activity;
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            activity_type: activity_type,
            score: score,
            description: description
        },
        validationSchema: ActivitySchema,
        onSubmit: (values) => {
            setLoading(true);
            updateActivity(_id, values)
                .then(response => {
                    queryClient.refetchQueries('activities_list');
                    queryClient.refetchQueries('activitybyId');
                    setLoading(false);
                    setShow(false);
                })
                .catch(e => {
                    toast.error(e.response.data, {
                        position: "top-center",
                        autoClose: 5000,
                        theme: 'dark',
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: 0,
                    });
                });
        },
    });

    const { handleSubmit, handleChange, values, touched, errors } = formik;

    return (
        <>
            <ToastContainer />
            <form className='px-4' onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label className="form-label">Activity Name</label>
                    <input type="text" className={touched.activity_type && Boolean(errors.activity_type) ? INVALID : VALID}
                        value={values.activity_type} name="activity_type" onChange={handleChange}
                    />
                    <div className="invalid-feedback">
                        {touched.activity_type && errors.activity_type}
                    </div>
                </div>
                <div class="mb-3">
                    <label className="form-label">Score</label>
                    <input type="text" className={touched.score && Boolean(errors.score) ? INVALID : VALID}
                        value={values.score} name="score" onChange={handleChange}
                    />
                    <div className="invalid-feedback">
                        {touched.score && errors.score}
                    </div>
                </div>
                <div class="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className={touched.description && Boolean(errors.description) ? INVALID : VALID} rows="3"
                        value={values.description} name="description" onChange={handleChange}
                    ></textarea>
                    <div className="invalid-feedback">
                        {touched.description && errors.description}
                    </div>
                </div>
                <div className='d-flex justify-content-end gap-2 py-3'>
                    <button type="button" className='btn btn-danger' onClick={handleClose} disabled={loading}>
                        Cancel
                    </button>
                    <button type="submit" className='btn btn-primary'>
                        {loading ? <span><ImSpinner2 className="bx-spin me-2" />saving</span> : ' Save Changes'}
                    </button>
                </div>
            </form>
        </>
    )

}

export default EditActivityForm
