import React from 'react';
import CardData from './CardData';

function ListofData() {
    console.log(CardData)
    return (
        <>
            <center>
                <i
                    className='bx bx-loader-circle bx-spin'
                    style={{
                        fontSize: 30 + 'rem',
                        color: 'grey'
                    }} ></i>
                <h1>Under development</h1>
            </center>
        </>
    )

}

export default ListofData;