export interface Bookmark {
    title: string;
    href: string;
    description: string;
    category: string;
}

export const bookmarks: Bookmark[] = [
    {
        title: "Astro",
        href: "https://astro.build",
        description:
            "Framework para construir webs rápidas y orientadas a contenido.",
        category: "Desarrollo",
    },
    {
        title: "MDN Web Docs",
        href: "https://developer.mozilla.org",
        description: "Referencia fundamental para HTML, CSS y JavaScript.",
        category: "Desarrollo",
    },
    {
        title: "The Marginalian",
        href: "https://www.themarginalian.org",
        description: "Ensayos sobre libros, creatividad, filosofía y cultura.",
        category: "Lectura",
    },
    {
        title: "Are.na",
        href: "https://www.are.na",
        description:
            "Una herramienta tranquila para guardar y relacionar ideas.",
        category: "Herramientas",
    },
];
