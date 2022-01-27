import React from 'react'
import { BiUserCircle } from 'react-icons/bi'

function Preview({ data }) {
    return (
        <>
            <ul class="list-group list-group-flush">
                {
                    data.map(i => (
                        <li className="list-group-item">
                            <BiUserCircle />
                            <span className="ms-3">
                                {i.email}
                            </span>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Preview
