import { Service, signal, inject } from '@angular/core';
import { Project } from '../interfaces/project';
import { TranslateService } from '@ngx-translate/core';

@Service()
export class ProjectsService {
    translate = inject(TranslateService);
    projects = signal<Project[]>([
        {
            slug: "join",
            name: "app.project-details-join.name",
            description: "app.project-details-join.description",
            featured: true,
            img: "/img/join.png",
            className: 'projects__img projects__img--float',
            details: "app.project-details-join.details",
            duration: "app.project-details-join.duration",
            technologies: [{
                icon: "string",
                technology: "string"
            }],
            github: "",
            livetest: ""
        },
        {
            slug: "pollo-loco",
            name: "app.project-details-polloloco.name",
            description: "app.project-details-polloloco.description",
            featured: false,
            img: "/img/elpolloloco.png",
            className: 'projects__img',
            details: "app.project-details-polloloco.details",
            duration: "app.project-details-polloloco.duration",
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
            name: "app.project-details-poke.name",
            description: "app.project-details-poke.description",
            featured: false,
            img: "/img/pokedex.png",
            className: 'projects__img',
            details: "app.project-details-poke.details",
            duration: "app.project-details-poke.duration",
            technologies: [{
                icon: "/icons/skill_html.png",
                technology: "HTML"
            },
            {
                icon: "/icons/skill_css.png",
                technology: "CSS"
            }],
            github: "https://github.com/kristinastarovoit/07_pokedex.git",
            livetest: "https://kristinastarovoit.developerakademie.net/07_pokedex/index.html"
        }
    ]);

    getBySlug(slug: string): Project | undefined {
        return this.projects().find(p => p.slug === slug);
    }
}
