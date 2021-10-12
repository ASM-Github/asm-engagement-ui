import React from 'react';

function AddFellowTitle(props) {
    return (
        <>
            <div className="d-flex bd-highlight">
                <div class="p-2 flex-grow-1 bd-highlight">
                    <h4 className="aa-cards-title">
                        {props.title}
                    </h4>
                    <p className="aa-cards-desc">
                        {props.description}
                    </p>
                </div>
            </div>
        </>
    )
}
export default AddFellowTitle;