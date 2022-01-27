import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table'
import { AiOutlineSearch } from 'react-icons/ai'
import '../../../../../assets/css/form-control.css'

export const GlobalFilter = ({ filter, setFilter }) => {
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
                        placeholder="Search request"
                        value={value || ''}
                        onChange={e => {
                            setValue(e.target.value);
                            onChange(e.target.value);
                        }}
                    />
                </div>
            </div>
        </div>
    )
}