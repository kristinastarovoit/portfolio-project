export interface Project {
    slug: string,
    name: string,
    description: string,
    featured: boolean,
    img: string,
    className: string,
    details: string,
    duration: string,
    technologies: Technology[],
    github: string,
    livetest: string
}
export interface Technology {
    icon: string;
    technology: string;
}