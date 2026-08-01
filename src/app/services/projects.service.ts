import { Service, signal } from '@angular/core';
import { Project } from '../interfaces/project';

@Service()
export class ProjectsService {
    projects = signal<Project[]>([
        {
            slug: "join",
            name: "Join",
            description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
            featured: true,
            img: "/img/join.png",
            className: 'projects__img projects__img--float',
            details: "string",
            duration: "string",
            technologies: [{
                icon: "string",
                technology: "string"
            }]
        },
        {
            slug: "pollo-loco",
            name: "El Pollo Loco",
            description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
            featured: false,
            img: "/img/elpolloloco.png",
            className: 'projects__img',
            details: "string",
            duration: "string",
            technologies: [{
                icon: "string",
                technology: "string"
            }]
        },
        {
            slug: "pokedex",
            name: "PokéDex",
            description: "Interactive Pokédex app fetching dynamic data from the PokéAPI. Browse Pokémon, view detailed stats, types, and abilities in a clean, visual interface.",
            featured: false,
            img: "/img/pokedex.png",
            className: 'projects__img',
            details: "string",
            duration: "string",
            technologies: [{
                icon: "string",
                technology: "string"
            }]
        }
    ]);

    getBySlug(slug:string): Project | undefined {
        return this.projects().find(p => p.slug === slug);
    }
}
