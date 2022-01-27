import React, { useState } from 'react'
import { useFormik } from 'formik'
import Select from 'react-select';
import { Container, Card, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { MdCached } from 'react-icons/md';
import { getParticipants } from '../../../../../utils/react-select-utils'
import { ProgramSchema } from '../../validation/ProgramValidation'
import { createProgram } from '../../../../../utils/AxiosService'
import { useSelectParticipants } from '../../../../../hooks/useFellows';
import { usePICLists } from '../../../../../hooks/usePrograms';
import Success from './SuccessPage';

function FellowForm() {
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [pic, setPic] = useState("");
    const [users, setUsers] = useState([]);
    const VALID = "form-control border-0 py-2";
    const INVALID = `${VALID} is-invalid`
    const { isLoading: picLoading, isError: picError, data: pics } = usePICLists()
    const {
        isLoading: participantsLoading,
        isError: participantsError, data:
        participants } = useSelectParticipants();

    const handlePIC = (e) => {
        if (e !== null) {

            setPic(e.value);
        }
        else (setPic(null))

    }

    const handleParticipants = selectedOption => {

        if (selectedOption !== null) {
            const newParticipants = getParticipants(selectedOption);
            setUsers(newParticipants);
        }
        else (setUsers([]))

    }

    const formik = useFormik({
        initialValues: {
            topic: '',
            start_date: '',
            end_date: '',
            description: '',
            user: ''
        },
        validationSchema: ProgramSchema,
        onSubmit: (values) => {
            setLoading(true)
            const {
                topic,
                description,
                start_date,
                end_date,
            } = values;
            const newProgram = {
                topic,
                description,
                start_date,
                end_date,
                pic,
                users
            }

            createProgram(newProgram)
                .then(response => {
                    setLoading(false)
                    setSubmitted(true)
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
        <Container>
            {submitted ?
                <Success /> :
                <>
                    <ToastContainer />
                    <h3 className="text-center mb-4 fw-bold">Create a Program</h3>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="d-flex justify-content-center">
                            <Card className="p-4 border-0" style={{ width: 54 + 'rem' }}>
                                <h4>Program Details</h4>
                                <Row>
                                    <div className="my-3">
                                        <div>
                                            <label className="form-label fw-bold"
                                                onChange={formik.handleChange}>
                                                Program Name
                                            </label>
                                            <input type="text" name="topic" className={
                                                formik.touched.topic && Boolean(formik.errors.topic)
                                                    ? INVALID : VALID
                                            }
                                                placeholder="Enter a program title"
                                                onChange={formik.handleChange} />
                                            <div className="invalid-feedback">
                                                {formik.touched.topic && formik.errors.topic}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3 col-6">
                                        <div>
                                            <label className="form-label fw-bold"
                                                onChange={formik.handleChange}>
                                                Start Date
                                            </label>
                                            <input type="date" name="start_date" className={
                                                formik.touched.start_date && Boolean(formik.errors.start_date)
                                                    ? INVALID : VALID
                                            }
                                                onChange={formik.handleChange} />
                                            <div className="invalid-feedback">
                                                {formik.touched.start_date && formik.errors.start_date}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3 col-6">
                                        <div>
                                            <label className="form-label">
                                                End Date
                                            </label>
                                            <input type="date" name="end_date" className={
                                                formik.touched.end_date && Boolean(formik.errors.end_date)
                                                    ? INVALID : VALID
                                            }
                                                placeholder="Enter a strong password"
                                                onChange={formik.handleChange} />
                                            <div className="invalid-feedback">
                                                {formik.touched.end_date && formik.errors.end_date}
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </Card>
                        </div>
                        <div className="d-flex justify-content-center my-4">
                            <Card className="p-4 border-0" style={{ width: 54 + 'rem' }}>
                                <h4>Program Members</h4>
                                <div className="mb-3 mt-3">
                                    <label className="form-label">
                                        Person in charge (PIC)
                                        <span className="text-danger">*</span>
                                    </label>
                                    {pics && <Select
                                        placeholder="Select person in charge"
                                        options={pics} // set list of the data
                                        onChange={handlePIC} // assign onChange function
                                        noOptionsMessage={() => "Sorry, pic not found"}
                                        isClearable

                                    />
                                    }
                                    {picLoading && <div>Loading . . .</div>}
                                    {picError && <div>Failed to fetch data</div>}
                                    {pics === "Error" && <div className="text-danger mb-0 form-text">
                                        Person in charge is required
                                    </div>}
                                </div>
                                <div className="mb-3 mt-3">
                                    <label className="form-label">
                                        Participants
                                        <span className="text-danger">*</span>
                                    </label>
                                    {participants && <Select
                                        placeholder="Select participants"
                                        options={participants} // set list of the data
                                        onChange={handleParticipants} // assign onChange function
                                        noOptionsMessage={() => "Sorry, no more fellow found"}
                                        isClearable
                                        isMulti
                                    />
                                    }
                                    {participantsLoading && <div>Loading . . .</div>}
                                    {participantsError && <div>Failed to fetch data</div>}
                                    {participants === "Error" && <div className="text-danger mb-0 form-text">
                                        Person in charge is required
                                    </div>}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Description
                                        <span className="text-danger">*</span>
                                    </label>
                                    <textarea
                                        name="description"
                                        placeholder="No longer than 250 words" rows="3"
                                        onChange={formik.handleChange}
                                        className={formik.touched.description
                                            && Boolean(formik.errors.description)
                                            ? "form-control is-invalid border-0" : "form-control border-0"}
                                        value={formik.values.description}>
                                    </textarea>
                                    <div className="invalid-feedback">
                                        {formik.touched.description && formik.errors.description}
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mt-3">
                                    <button className="btn btn-primary px-5" type="submit"
                                        disabled={loading}>
                                        {loading ?
                                            <>
                                                <MdCached className="me-3 bx-spin" />
                                                Creating
                                            </> : 'Create'}
                                    </button>
                                </div>
                            </Card>
                        </div>
                    </form>
                </>}

        </Container>
    )
}

export default FellowForm
