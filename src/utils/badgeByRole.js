export default function BadgeByRole(role) {
    if (role === 'admin') {
        return 'fw-bolder badge bg-danger text-danger bg-opacity-25';
    } else if (role === 'fellow') {
        return 'fw-bolder badge bg-primary text-primary bg-opacity-25';
    } else if (role === 'secretariat') {
        return 'fw-bolder badge bg-warning text-warning bg-opacity-25';
    } else {
        return 'fw-bolder badge bg-info text-info bg-opacity-25';
    }
}

export function BadgeByUserType(user_type) {
    if (user_type === 'fellow') {
        return 'fw-bolder badge bg-danger text-danger bg-opacity-25';
    } else if (user_type === 'trsm') {
        return 'fw-bolder badge bg-primary text-primary bg-opacity-25';
    } else if (user_type === 'ysm-asm') {
        return 'fw-bolder badge bg-warning text-warning bg-opacity-25';
    } else {
        return 'fw-bolder badge bg-info text-info bg-opacity-25';
    }
}