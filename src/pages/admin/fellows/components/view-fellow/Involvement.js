import React from 'react';
import { Card } from 'react-bootstrap'
import Program from './Program'
import { Accordion } from 'react-bootstrap'

function Involvement({ involvement }) {

    const { programs } = involvement;

    return (
        <>
            <Card className='my-4 border-0'>
                <Card.Header className='bg-primary text-white'>
                    <h3 className='mb-2 mt-3'>Involvement</h3>
                </Card.Header>
                <Accordion>
                    {
                        programs.map((program, index) => {
                            const { topic } = program._id;
                            const { activities } = program;
                            return (
                                <Program
                                    key={index}
                                    index={index}
                                    topic={topic}
                                    activities={activities}
                                />

                            )
                        })
                    }
                </Accordion>
            </Card >
        </>
    )
}

export default Involvement;
