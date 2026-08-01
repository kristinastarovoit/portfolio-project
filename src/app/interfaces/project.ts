export interface Project {
    slug: string,
    name: string,
    description: string,
    featured: boolean,
    img: string,
    className: string,
    details: string,
    duration: string,
    technologies: Technology[]
}
export interface Technology {
    icon: string;
    technology: string;
}