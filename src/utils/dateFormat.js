import { format } from 'date-fns';

export function dateFormat(date, pattern) {
    return format(new Date(date), pattern)
}