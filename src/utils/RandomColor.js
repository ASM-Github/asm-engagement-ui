var randomBG = ['bg-warning', 'bg-danger', 'bg-primary', 'bg-success', 'bg-info']

export function RandomColor() {
    const colorbg = randomBG[Math.floor(Math.random() * randomBG.length)]
    return colorbg;
}