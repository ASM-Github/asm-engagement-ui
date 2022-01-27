import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table'
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch, AiOutlinePlus, AiOutlineImport } from 'react-icons/ai'
import '../../../../../assets/css/form-control.css'

export const GlobalFilter = ({ filter, setFilter }) => {
    let navigate = useNavigate()
    const [value, setValue] = useState(filter);
    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 1000)
    return (
        <div className="d-flex justify-content-between mx-4">
            <div className="col-3">
                <div className="input-group">
                    <span className="input-group-text border-0 bg-secondary">
                        <AiOutlineSearch className="text-black-50" />
                    </span>
                    <input
                        className="asm-form-control form-control bg-secondary border-0 py-2"
                        placeholder="Search program"
                        value={value || ''}
                        onChange={e => {
                            setValue(e.target.value);
                            onChange(e.target.value);
                        }}
                    />
                </div>
            </div>
            <div>
                <button type="button"
                    className="btn btn-secondary py-2 text-primary"
                    onClick={
                        () => navigate('/admin/program/add-new')
                    }>
                    <span className="me-2">
                        <AiOutlinePlus />
                    </span>
                    Add Program
                </button>
                <button type="button"
                    className="btn btn-outline-primary py-2 ms-2"
                    onClick={
                        () => navigate('/admin/program/import')
                    }>
                    <span className="me-2">
                        <AiOutlineImport />
                    </span>
                    Import
                </button>
            </div>
        </div>
    )
}