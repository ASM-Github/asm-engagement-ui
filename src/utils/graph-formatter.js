export function GraphFormatterData(data) {
    const scores = data.map(i => {
        return i.score
    })

    return scores;
}

export function GraphFormatterLabel(data) {
    const scores = data.map(i => {
        return i.fellow_id.name
    })

    return scores;
}
