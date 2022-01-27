import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table'

export const GlobalFilter = ({ filter, setFilter }) => {
    const [value, setValue] = useState(filter);
    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 1000)
    return (
        <div className="row">
            <div className="col-4">
                <input
                    className="form-control"
                    placeholder="Search a program"
                    value={value || ''}
                    onChange={e => {
                        setValue(e.target.value);
                        onChange(e.target.value);
                    }}
                />
            </div>
        </div>
    )
}
