import { Component, input, inject } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../interfaces/project';
import { Header } from "../../layout/header/header";
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-details',
  imports: [Header],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetails {
  projectsService = inject(ProjectsService);
  slug = input.required<string>();
  router = inject(Router);

  //gibt das richtige Projekt zurück in abhängigkeit vom slug

  project(): Project | undefined {
    return this.projectsService.getBySlug(this.slug());
  }

  goToNextProject() {
    const allProjects = this.projectsService.projects();
    const currentIndex = allProjects.findIndex(p => p.slug === this.slug());
    const nextIndex = (currentIndex + 1) % allProjects.length;
    const nextProject = allProjects[nextIndex];
    this.router.navigate(['/project-detail', nextProject.slug]);
  }
}
