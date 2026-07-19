const dateFormatter = new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
})

const compactDateFormatter = new Intl.DateTimeFormat('es-ES', {
    month: 'short',
    year: 'numeric',
})

export function formatDate(date: Date): string {
    return dateFormatter.format(date)
}

export function formatCompactDate(date: Date): string {
    return compactDateFormatter.format(date)
}
