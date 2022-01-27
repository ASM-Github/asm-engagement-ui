import React from 'react'
import Label from './FormLabel'
import { useFormik } from 'formik';
import { BiEditAlt } from 'react-icons/bi'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { updateProfile } from './../../../../utils/AxiosService';
function EditProfileForm({ fellowDesc }) {
    const [edit, setEdit] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const {
        _id,
        name,
        nric,
        phone,
        address,
        discipline,
        expertise,
        role } = fellowDesc;

    const formik = useFormik({
        initialValues: {
            name,
            nric,
            phone,
            address,
            discipline,
            expertise,
            role
        },

        onSubmit: (values) => {
            setLoading(true)
            const id = toast.loading("Updating your profile...",
                {
                    type: "success",
                    isLoading: true,
                    position: "top-center",
                    transition: Bounce,
                    theme: 'dark'
                }
            )
            updateProfile(_id, values)
                .then(function (response) {
                    toast.update(id,
                        {
                            render: "Profile updated successfully",
                            type: "success",
                            isLoading: false,
                            autoClose: 5000,
                            position: "top-center",
                            transition: Bounce,
                            theme: 'dark'
                        });
                    setLoading(false)
                    setEdit(false)
                })
                .catch(function (error) {
                    console.log(error);
                });
            //alert(JSON.stringify(values, null, 2));
        },
    });

    const handleCancel = () => {
        setEdit(false)
        formik.resetForm()
    }

    return (
        <>
            <ToastContainer />
            <form onSubmit={formik.handleSubmit}>
                <div className="d-flex align-items-center mb-3">
                    <h3 className="fw-bolder mb-0">
                        Fellow Description
                    </h3>
                    <div className="ms-2">
                        <BiEditAlt className="text-primary"
                            onClick={() => setEdit(true)} />
                    </div>
                </div>
                <div className="row mb-4">
                    <Label name="Full Name" />
                    <div className="col-9">
                        <input type="text" className="form-control border-0 py-2"
                            name="name" onChange={formik.handleChange}
                            value={formik.values.name} disabled={!edit} />
                    </div>
                </div>
                <div className="row mb-4">
                    <Label name="MyKad Number" />
                    <div className="col-9">
                        <input type="text" className="form-control border-0 py-2"
                            name="nric" onChange={formik.handleChange}
                            value={formik.values.nric} disabled={!edit} />
                    </div>
                </div>
                <div className="row mb-4">
                    <Label name="Phone Number" />
                    <div className="col-9">
                        <input type="text" className="form-control border-0 py-2"
                            name="phone" onChange={formik.handleChange}
                            value={formik.values.phone} disabled={!edit} />
                    </div>
                </div>
                <div className="row mb-4">
                    <Label name="Address" />
                    <div className="col-sm-9">
                        <textarea className="form-control border-0"
                            name="address" onChange={formik.handleChange}
                            value={formik.values.address} disabled={!edit} rows="3"></textarea>
                    </div>
                </div>
                <div className="row mb-4">
                    <Label name="Discipline" />
                    <div className="col-9">
                        <input type="text" className="form-control border-0 py-2"
                            name="discipline" onChange={formik.handleChange}
                            value={formik.values.discipline} disabled={!edit} />
                    </div>
                </div>
                <div className="row mb-4">
                    <Label name="Expertise" />
                    <div className="col-9">
                        <input type="text" className="form-control border-0 py-2"
                            name="expertise" onChange={formik.handleChange}
                            value={formik.values.expertise} disabled={!edit} />
                    </div>
                </div>
                <div className="row mb-4">
                    <Label name="Role" />
                    <div className="col-9">
                        <input type="text" className="form-control border-0 py-2"
                            name="role" onChange={formik.handleChange}
                            value={formik.values.role} disabled />
                    </div>
                </div>
                <div className="d-flex justify-content-center gap-2">
                    {edit ?
                        <>
                            {!loading ?
                                <button type="button" className="btn btn-light text-danger fw-bold px-4"
                                    onClick={handleCancel}>
                                    Cancel
                                </button> : null}
                            <button type="submit" className="btn btn-primary px-4">
                                {loading ? "Saving" : "Save"}
                            </button>
                        </> : null}
                </div>
            </form >
        </>
    )
}

export default EditProfileForm
