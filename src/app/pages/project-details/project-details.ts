import { Component, input, inject } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-project-details',
  imports: [],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetails {
  projectsService = inject(ProjectsService);
  slug = input.required<string>();

  //gibt das richtige Projekt zurück in abhängigkeit vom slug

  project(): Project | undefined {
    return this.projectsService.getBySlug(this.slug());
  }
}
