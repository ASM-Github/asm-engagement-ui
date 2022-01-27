export function getActivityID(activities) {
    return Array.isArray(activities) ? activities.map(x => x.value) : []
}

export function getParticipants(users) {
    return Array.isArray(users) ? users.map(x => x.value) : []
}