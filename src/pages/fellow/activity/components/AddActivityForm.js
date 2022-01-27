import React, { useState } from 'react'
import { useBlocker, usePrompt } from 'react-router-dom'
import Select from 'react-select';
import { getActivityID } from '../../utils/react-select-utils';
import { useQuery } from './../../utils/rrdQuery';

function AddActivityForm({ activities }) {
    let query = useQuery();
    const [value, setValue] = useState('');

    const handleChange = (values) => {
        setValue(getActivityID(values))
    }
    const handleSubmit = (event) => {
        const activities = {
            program_id: query.get('pid'),
            activities: value,
            fellow_desc: query.get('fid')
        }
        event.preventDefault()
        console.log(activities)
    }


    return (
        <>

            <form className="mt-4">
                <div className="mb-3">
                    <label className="form-label asm-fw-500">
                        Program Title
                    </label>
                    <input className="form-control asm-fw-500 border-0 py-2"
                        value={query.get('topic')} disabled />
                </div>
                <label className="form-label asm-fw-500">
                    Choose involvement activities
                </label>
                <Select
                    className="dropdown"
                    placeholder="Select Option"
                    onChange={handleChange}
                    options={activities}
                    isMulti
                    noOptionsMessage={() => "Sorry No Activity Found"}
                    isClearable />
                <div className="d-grid mt-4">
                    {value.length > 0 ?
                        <button
                            type="button" className="btn btn-primary py-2"
                            onClick={handleSubmit}>
                            Save Records
                        </button> :
                        <button
                            type="submit" className="btn btn-primary py-2" disabled>
                            Save Records
                        </button>}
                </div>
            </form>
        </>
    )
}

export default AddActivityForm
