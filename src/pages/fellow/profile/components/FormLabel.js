import React from 'react'

function FormLabel({ name }) {
    return (
        <label className="col-sm-3 col-form-label fw-bold">
            {name} :
        </label>
    )
}

export default FormLabel
