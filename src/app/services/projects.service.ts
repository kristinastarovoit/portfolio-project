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
            }],
            github: "",
            livetest: ""
        },
        {
            slug: "pollo-loco",
            name: "El Pollo Loco",
            description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
            featured: false,
            img: "/img/elpolloloco.png",
            className: 'projects__img',
            details: "string",
            duration: "3 weeks",
            technologies: [{
                icon: "/icons/skill_js.png",
                technology: "JavaScript"
            },
            {
                icon: "/icons/skill_html.png",
                technology: "HTML"
            },
            {
                icon: "/icons/skill_css.png",
                technology: "CSS"
            }
            ],
            github: "https://github.com/kristinastarovoit/08_polloloco.git",
            livetest: "https://kristinastarovoit.developerakademie.net/08_polloloco/index.html"
        },
        {
            slug: "pokedex",
            name: "PokéDex",
            description: "Interactive Pokédex app fetching dynamic data from the PokéAPI. Browse Pokémon, view detailed stats, types, and abilities in a clean, visual interface.",
            featured: false,
            img: "/img/pokedex.png",
            className: 'projects__img',
            details: "string",
            duration: "1 week",
            technologies: [{
                icon: "/icons/skill_html.png",
                technology: "HTML"
            }, 
            {
                icon: "/icons/skill_css.png",
                technology: "CSS"
            }],
            github: "https://github.com/kristinastarovoit/07_pokedex.git",
            livetest:"https://kristinastarovoit.developerakademie.net/07_pokedex/index.html"
        }
    ]);

    getBySlug(slug: string): Project | undefined {
        return this.projects().find(p => p.slug === slug);
    }
}
