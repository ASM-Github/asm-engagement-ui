import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import components
import AddForm from './AddFellowForm';
// import Bootstrap components
import Modal from 'react-bootstrap/Modal';
// import styles
import '../../components/button/button.css'

function AddFellowButton() {

    let history = useHistory();

    const openAddFellow = () => {
        history.push("/fellow/add");
    }

    return (
        <>
            <button
                onClick={() => openAddFellow()}
                className="abtn abtn-primary">
                Add fellow
            </button>
        </>
    )
}

export default AddFellowButton;