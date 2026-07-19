export interface Project {
    title: string
    description: string
    href: string
    repository?: string
    year: string
    status: 'activo' | 'mantenimiento' | 'archivo'
    technologies: string[]
    featured?: boolean
}

export const projects: Project[] = [
    {
        title: 'Simple chat',
        description:
            'MA minimal real‑time chat skeleton built with Express.js, HTMX, Alpine.js, Handlebars, and Tailwind CSS.',
        href: 'https://github.com/EvegeniyNekrasov/simple_chat',
        repository: 'https://github.com/EvegeniyNekrasov/simple_chat',
        year: '2025',
        status: 'activo',
        technologies: ['Htmx', 'Alpine.js', 'Handlebars', 'Tailwindcss'],
        featured: true,
    },
]
