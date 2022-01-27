import React from 'react'
import ProgramRequestItems from './PendingProgram';

function PendingProgramsItems({ programs }) {

    const slicePrograms = programs.slice(0, 3);

    return (
        <>
            {
                slicePrograms.map(item => {
                    const { _id, created_date } = item;
                    const { topic } = item.program_id;
                    const { activity_type } = item.activity_id;

                    return (
                        <ProgramRequestItems
                            key={_id}
                            program={topic}
                            activity={activity_type}
                            date={created_date}
                        />
                    )
                })
            }
        </>
    )
}

export default PendingProgramsItems
