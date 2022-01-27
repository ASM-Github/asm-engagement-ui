import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useQueryClient } from 'react-query'
import { ToastContainer, toast } from 'react-toastify';
import Success from './Success'
import { ActivitySchema } from '../../validation/ActivityValidation';
import { activityPOST } from '../../../../../utils/AxiosService'

function ActivityForm({ handleClose }) {
    let queryClient = useQueryClient()
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const VALID = "form-control border-0";
    const INVALID = `${VALID} is-invalid border-0`
    const formik = useFormik({
        initialValues: {
            activity_type: '',
            description: '',
            score: ''
        },
        validationSchema: ActivitySchema,
        onSubmit: (values) => {
            setLoading(true)
            activityPOST(values)
                .then(response => {
                    setSubmitted(true)
                    setLoading(false)
                    queryClient.refetchQueries('activities_list')
                })
                .catch(e => {
                    setLoading(false)
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
    return (
        <>
            <ToastContainer />
            {
                loading || submitted ?
                    <Success loading={loading} submitted={submitted} closeModal={handleClose} />
                    :
                    <div className="p-5">
                        <form onSubmit={formik.handleSubmit}>
                            <h4 className="text-center mb-4 fw-bold">Create a Activity</h4>
                            <div className="mb-3">
                                <label className="form-label fw-bold">
                                    Activity Name
                                </label>
                                <input type="text" name="activity_type" className={
                                    formik.touched.activity_type && Boolean(formik.errors.activity_type)
                                        ? INVALID : VALID
                                }
                                    placeholder="Enter a activity name"
                                    onChange={formik.handleChange} />
                                <div className="invalid-feedback">
                                    {formik.touched.activity_type && formik.errors.activity_type}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold">
                                    Score
                                </label>
                                <input type="text" name="score" className={
                                    formik.touched.score && Boolean(formik.errors.score)
                                        ? INVALID : VALID
                                }
                                    placeholder="Enter a score for this activity"
                                    onChange={formik.handleChange} />
                                <div className="invalid-feedback">
                                    {formik.touched.score && formik.errors.score}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold">
                                    Description
                                </label>
                                <textarea type="text" name="description" className={
                                    formik.touched.description && Boolean(formik.errors.description)
                                        ? INVALID : VALID
                                }
                                    placeholder="Enter the description"
                                    onChange={formik.handleChange} rows={4}>

                                </textarea>
                                <div className="invalid-feedback">
                                    {formik.touched.description && formik.errors.description}
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mt-4 gap-2">
                                <button
                                    className="btn btn-outline-danger rounded-pill px-4"
                                    type="button" onClick={() => handleClose()}>
                                    Cancel
                                </button>
                                <button
                                    className="btn btn-primary rounded-pill px-4"
                                    type="submit">
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
            }


        </>
    )
}

export default ActivityForm
