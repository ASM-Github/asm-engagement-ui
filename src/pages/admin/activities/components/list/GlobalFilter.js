import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table'
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai'
import Modal from '../create-activity/Modal'

export const GlobalFilter = ({ filter, setFilter }) => {
    const [openModal, setOpenModal] = useState(false)
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
                        placeholder="Search activity"
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
                    onClick={() => setOpenModal(true)}>
                    <span className="me-2">
                        <AiOutlinePlus />
                    </span>
                    Create Activity
                </button>
                <Modal modal={openModal} handleModal={setOpenModal} />
            </div>
        </div >
    )
}