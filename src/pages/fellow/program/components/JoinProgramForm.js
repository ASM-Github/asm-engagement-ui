import React, { useState } from 'react'
import Select from 'react-select'
import NextPage from './JoinProgramSuccess'
import { requestProgram } from '../../../../utils/AxiosService';
import { isAuth } from './../../../../auth/Login/helpers';

function JoinProgramForm({ handleClose, programs, activities }) {

    const { fellow_desc } = isAuth()
    const [program, setProgram] = useState('')
    const [activity, setActivity] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleProgram = data => {
        setProgram(data)
    }

    const handleActivity = data => {
        setActivity(data)
    }


    const handleSubmit = (activity, program) => {
        const { value: program_id } = program;
        const { value: activity_id } = activity;
        const program_request = {
            fellow_desc,
            program_id,
            activity_id
        }
        // NOTE : DEBUG
        //console.log(program_request)
        setLoading(true)
        requestProgram(program_request)
            .then(function (response) {
                setLoading(false)
                setSubmitted(true)
                //console.log(response);
            })
            .catch(function (error) {
                setProgram(null)
                console.log(error.response);
                //console.log(program_request)
            });
    }

    return (
        <>
            {loading || submitted ?
                <NextPage loading={loading} submitted={submitted} closeModal={handleClose} />
                :
                <div className="p-4 my-3">
                    <h4 className="text-center mb-4">
                        Request a program
                    </h4>
                    <label className="form-label fw-bold">
                        Program Name
                    </label>
                    <Select options={programs}
                        placeholder="Please select a program"
                        onChange={handleProgram}
                        noOptionsMessage={() => "Sorry! Program not found"}
                        isClearable
                    />
                    <label className="form-label fw-bold mt-3">
                        Activity Name
                    </label>
                    <Select options={activities}
                        placeholder="Please select a activity"
                        onChange={handleActivity}
                        noOptionsMessage={() => "Sorry! Program not found"}
                        isClearable
                    />
                    <div className="d-flex justify-content-center mt-4 gap-3">
                        <button type="button" className="btn btn-outline-danger rounded-pill px-3"
                            onClick={() => handleClose()}>
                            Cancel
                        </button>
                        {program && activity && <button type="button"
                            className="btn btn-primary rounded-pill px-3"
                            onClick={() => handleSubmit(activity, program)}
                        >
                            Send
                        </button>}

                    </div>
                </div>}
        </>
    )
}

export default JoinProgramForm
