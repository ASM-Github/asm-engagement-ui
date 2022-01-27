import React from 'react';
import ActivityContent from './ActivityContent';

function Activity({ activities }) {
    console.log(activities);
    return (
        <>
            {activities.map((activity, index) => {
                const { _id, activity_type } = activity;
                return (
                    <ActivityContent key={index} activity_type={activity_type} _id={_id} />
                )
            })
            }
        </>
    )
}

export default Activity;
