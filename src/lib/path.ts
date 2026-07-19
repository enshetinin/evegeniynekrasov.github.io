const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

export function path(value = ""): string {
    return `${base}${value.replace(/^\/+/, "")}`;
}
