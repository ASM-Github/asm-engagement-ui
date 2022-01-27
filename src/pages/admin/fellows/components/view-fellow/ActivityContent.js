import React from 'react';

function ActivityContent({ activity_type }) {
    return (
        <div class="alert alert-primary" role="alert">
            {activity_type}
        </div >
    )
}

export default ActivityContent;
