import React from 'react'
import ActivityItems from './PendingActivity'

function PendingActivitiesItems({ activities }) {

    //limit data to 5 using slice
    const sliceActivities = activities.slice(0, 3);

    return (
        <>
            {
                sliceActivities.map(act => {
                    const { _id, created_date } = act;
                    const { topic } = act.program_id;
                    const { activity_type } = act.activity_id;
                    return (
                        <ActivityItems
                            key={_id}
                            id={_id}
                            program={topic}
                            date={created_date}
                            activity={activity_type}
                        />
                    )
                })
            }
        </>
    )
}

export default PendingActivitiesItems
