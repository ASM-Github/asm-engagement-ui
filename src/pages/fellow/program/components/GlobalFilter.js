import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsCalendar2Plus } from 'react-icons/bs'
import Modal from './JoinProgramModal'
import '../../../../assets/css/form-control.css'

export const GlobalFilter = ({ filter, setFilter }) => {
    const [openModal, setOpenModal] = useState(false)
    const [value, setValue] = useState(filter);
    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 1000)
    return (
        <>
            <div className="ms-4 col-3">
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
            <button type="button" className="btn btn-outline-primary px-4 me-4"
                onClick={() => setOpenModal(true)}>
                <BsCalendar2Plus className="me-3" />
                Join Program
            </button>
            <Modal show={openModal} handleModal={setOpenModal} />
        </>
    )
}