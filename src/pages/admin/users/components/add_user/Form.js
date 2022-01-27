import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify'
import SuccessPage from './SuccessPage'
import { createUser } from '../../../../../utils/AxiosService';
import { UserSchema } from '../../validation/UserValidation';
function FellowForm({ handleClose }) {
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const queryClient = useQueryClient()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            user_type: '',
        },
        validationSchema: UserSchema,
        onSubmit: (values) => {
            setSubmitted(true)
            setLoading(true)
            createUser(values)
                .then(function (response) {
                    queryClient.refetchQueries("users-list")
                    queryClient.refetchQueries("users-chart")
                    setLoading(false)
                })
                .catch(function (error) {
                    toast.error('Unable to create a user', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                });

            //  alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <>
            <ToastContainer />
            {submitted ?
                <SuccessPage loading={loading} submitted={submitted} closeModal={handleClose} /> :
                <>
                    <h3 className="text-center mt-5 mb-4">
                        Create a new user profile</h3>
                    <div className="mx-5 mb-3">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label fw-bold">Email address</label>
                                <input type="email" name="email"
                                    placeholder="Enter a valid email"
                                    className={Boolean(formik.errors.email) ?
                                        "form-control is-invalid border-0" : "form-control border-0"}
                                    onChange={formik.handleChange} />
                                <div className="invalid-feedback">
                                    {formik.errors.email}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold">Password</label>
                                <input type="password" name="password"
                                    placeholder="Enter a strong password"
                                    className={Boolean(formik.errors.password) ?
                                        "form-control is-invalid" : "form-control border-0"}
                                    onChange={formik.handleChange} />
                                <div className="invalid-feedback">
                                    {formik.errors.password}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold">User Type</label>
                                <select name="user_type"
                                    className={Boolean(formik.errors.user_type) ?
                                        "form-control is-invalid border-0" : "form-control border-0"}
                                    onChange={formik.handleChange}>
                                    <option defaultValue className="text-muted">
                                        --Please Select the user type--
                                    </option>
                                    <option value="admin">Admin</option>
                                    <option value="secretariat">Secretariat</option>
                                </select>
                                <div className="invalid-feedback">
                                    {formik.errors.user_type}
                                </div>
                            </div>
                            <div className="d-flex justify-content-center gap-2 mb-4 mt-4">
                                <button className="btn btn-outline-danger px-5"
                                    type="button" onClick={handleClose}>
                                    Cancel
                                </button>
                                <button className="btn btn-primary px-5" type="submit">
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </>}
        </>
    )
}

export default FellowForm
