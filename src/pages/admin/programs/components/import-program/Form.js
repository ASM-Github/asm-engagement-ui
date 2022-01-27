import React, { useState } from 'react'
import XLSX from 'xlsx'
function Form() {


    return (
        <>
            <form className='form-group' autoComplete="off"
                onSubmit={handleSubmit}>
                <label>
                    <h5>Upload Excel file <span className="text-danger">*.xls</span></h5>
                </label>
                <input type='file' className='form-control'
                    onChange={handleFile} required></input>
                {excelFileError && <div className='text-danger'
                    style={{ marginTop: 5 + 'px' }}>{excelFileError}</div>}
                <button type='submit' className='btn btn-success'
                    style={{ marginTop: 5 + 'px' }}>Submit</button>
            </form>
            <div>
                test
            </div>
        </>
    )
}

export default Form
