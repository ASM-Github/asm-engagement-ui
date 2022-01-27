import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export function DateFromNow(date) {

    var result = formatDistanceToNow(
        new Date(date),
        { includeSeconds: true }
    )

    return result
}