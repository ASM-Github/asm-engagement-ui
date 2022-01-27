import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Container, Card, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FellowSchema } from '../../validation/FellowValidition'
import { ROLES } from './USERTYPE';
import { fellowPOST } from '../../../../../utils/AxiosService';
import { MdCached } from 'react-icons/md';

function FellowForm() {
    const [loading, setLoading] = useState(false)
    let navigate = useNavigate();
    const VALID = "form-control border-0 py-2";
    const INVALID = `${VALID} is-invalid`
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            name: '',
            nric1: '',
            nric2: '',
            nric3: '',
            phone: '',
            address: '',
            discipline: '',
            expertise: '',
            role: '',

        },
        validationSchema: FellowSchema,
        onSubmit: (values) => {
            const {
                email,
                password,
                name,
                nric1,
                nric2,
                nric3,
                phone,
                address,
                discipline,
                expertise,
                role } = values;
            const status = "active"
            const nric = `${nric1}${nric2}${nric3}`
            const newFellow = {
                email,
                password,
                name,
                nric,
                phone,
                address,
                discipline,
                expertise,
                role,
                status
            }

            setLoading(true)

            fellowPOST(newFellow)
                .then(response => {
                    setLoading(false)
                    const { _id, name } = response.data;
                    navigate(
                        `/admin/fellow/add-new/${_id}/success?fellow_name=${name}`
                    )
                })
                .catch(e => {
                    console.log(e.response);
                    toast.error(e.response.data, {
                        theme: "dark"
                    });
                });
        },
    });
    return (
        <Container>
            <ToastContainer />
            <h3 className="mb-4 fw-bold text-center">
                Create a New Fellow
            </h3>
            <div className="d-flex justify-content-center">
                <form onSubmit={formik.handleSubmit}>
                    <Card className="border-0">
                        <Card.Header className="border-0 py-3 border-bottom">
                            <h4 className="mb-0">Authentication Info</h4>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <div className="mb-3 col-6">
                                    <div>
                                        <label className="form-label fw-bold"
                                            onChange={formik.handleChange}>
                                            Email address
                                        </label>
                                        <input type="email" name="email" className={
                                            formik.touched.email && Boolean(formik.errors.email)
                                                ? INVALID : VALID
                                        }
                                            placeholder="Enter a valid email"
                                            onChange={formik.handleChange} />
                                        <div className="invalid-feedback">
                                            {formik.touched.email && formik.errors.email}
                                        </div>
                                        <div className="form-text">
                                            We'll never share your email with anyone else.
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3 col-6">
                                    <div>
                                        <label className="form-label fw-bold">
                                            Password
                                        </label>
                                        <input type="password" name="password" className={
                                            formik.touched.password && Boolean(formik.errors.password)
                                                ? INVALID : VALID
                                        }
                                            placeholder="Enter a strong password"
                                            onChange={formik.handleChange} />
                                        <div className="invalid-feedback">
                                            {formik.touched.password && formik.errors.password}
                                        </div>
                                        <div className="form-text">
                                            Note : include uppercase , symbol and at least 8 characters
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className="border-0 my-5">
                        <Card.Header className="border-0 py-3 border-bottom">
                            <h4 className="mb-0 fw-bold">Fellow Details</h4>
                        </Card.Header>
                        <Card.Body>
                            <div className="mb-3">
                                <div>
                                    <label className="form-label fw-bold">
                                        Full Name
                                    </label>
                                    <input type="text" name="name"
                                        className={
                                            formik.touched.name && Boolean(formik.errors.name)
                                                ? INVALID : VALID
                                        }
                                        placeholder="Enter a full name"
                                        onChange={formik.handleChange} />
                                    <div className="invalid-feedback">
                                        {formik.touched.name && formik.errors.name}
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold">
                                    NRIC
                                </label>
                                <Row>
                                    <div className="col-3">
                                        <input type="text" name="nric1"
                                            className={
                                                formik.touched.nric1 && Boolean(formik.errors.nric1)
                                                    ? INVALID : VALID
                                            }
                                            placeholder="XXXXXX"
                                            maxLength="6"
                                            onChange={formik.handleChange} />
                                        <div className="invalid-feedback">
                                            {formik.touched.nric1 && formik.errors.nric1}
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <h1 className="col-form-label fw-bold">-</h1>
                                    </div>
                                    <div className="col-1">
                                        <input type="text" name="nric2"
                                            className={
                                                formik.touched.nric2 && Boolean(formik.errors.nric2)
                                                    ? INVALID : VALID
                                            }
                                            placeholder="XX"
                                            maxLength="2"
                                            onChange={formik.handleChange} />
                                    </div>
                                    <div className="col-auto">
                                        <h1 className="col-form-label">-</h1>
                                    </div>
                                    <div className="col-2">
                                        <input type="text" name="nric3"
                                            className={
                                                formik.touched.nric3 && Boolean(formik.errors.nric3)
                                                    ? INVALID : VALID
                                            }
                                            placeholder="XXXX"
                                            maxLength="4"
                                            onChange={formik.handleChange} />
                                    </div>
                                </Row>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-bold">
                                    Current Address
                                </label>
                                <textarea type="text" name="address"
                                    className={
                                        formik.touched.address && Boolean(formik.errors.address)
                                            ? INVALID : VALID
                                    }
                                    placeholder="Enter a full address"
                                    rows="3" onChange={formik.handleChange} ></textarea>
                                <div className="invalid-feedback">
                                    {formik.touched.address && formik.errors.address}
                                </div>
                            </div>
                            <Row>
                                <div className="mb-3 col-6">
                                    <label className="form-label fw-bold">
                                        Phone Number
                                    </label>
                                    <input type="tel" name="phone"
                                        className={
                                            formik.touched.phone && Boolean(formik.errors.phone)
                                                ? INVALID : VALID
                                        }
                                        placeholder="Enter a phone number"
                                        onChange={formik.handleChange} />
                                    <div className="invalid-feedback">
                                        {formik.touched.phone && formik.errors.phone}
                                    </div>
                                </div>
                                <div className="mb-3 col-6">
                                    <label className="form-label fw-bold">
                                        Role
                                    </label>
                                    <select name="role"
                                        className={
                                            formik.touched.role && Boolean(formik.errors.role)
                                                ? INVALID : VALID
                                        }
                                        onChange={formik.handleChange}>
                                        <option defaultValue value="" className="text-muted">
                                            -- Select a role --
                                        </option>
                                        {
                                            ROLES.map(item => (
                                                <option value={item.value} key={item.value}>
                                                    {item.label}
                                                </option>
                                            ))
                                        }
                                    </select>
                                    <div className="invalid-feedback">
                                        {formik.touched.role && formik.errors.role}
                                    </div>
                                </div>
                            </Row>
                            <Row>
                                <div className="mb-3 col-6">
                                    <label className="form-label fw-bold">
                                        Discipline
                                    </label>
                                    <input type="text" name="discipline"
                                        className={
                                            formik.touched.discipline && Boolean(formik.errors.discipline)
                                                ? INVALID : VALID
                                        }
                                        placeholder="Enter a discipline"
                                        onChange={formik.handleChange} />
                                    <div className="invalid-feedback">
                                        {formik.touched.discipline && formik.errors.discipline}
                                    </div>
                                </div>
                                <div className="mb-3 col-6">
                                    <label className="form-label fw-bold">
                                        Expertise
                                    </label>
                                    <input type="text" name="expertise"
                                        className={
                                            formik.touched.expertise && Boolean(formik.errors.expertise)
                                                ? INVALID : VALID
                                        }
                                        placeholder="Enter a expertise"
                                        onChange={formik.handleChange} />
                                    <div className="invalid-feedback">
                                        {formik.touched.expertise && formik.errors.expertise}
                                    </div>
                                </div>
                            </Row>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex justify-content-end my-3">
                                <button type="button" className="btn btn-danger px-5 me-3"
                                    onClick={() => navigate(-1)}
                                >
                                    Cancel
                                </button>
                                {loading ?
                                    <button type="submit" className="btn btn-dark px-5">
                                        <MdCached className="bx-spin me-3" />
                                        Registering
                                    </button> :
                                    <button type="submit" className="btn btn-primary px-5">
                                        Create
                                    </button>}
                            </div>
                        </Card.Footer>
                    </Card>

                </form>
            </div>
        </Container >
    )
}

export default FellowForm
