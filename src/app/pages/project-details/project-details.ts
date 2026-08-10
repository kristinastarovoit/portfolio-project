import { Component, input, inject } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../interfaces/project';
import { Header } from "../../layout/header/header";
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Cursor } from '../../cursor/cursor';
import { TosectionService } from '../../services/tosection.service';

@Component({
  selector: 'app-project-details',
  imports: [Header, RouterLink, TranslatePipe, Cursor],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetails {
  projectsService = inject(ProjectsService);
  slug = input.required<string>();
  router = inject(Router);
  translate = inject(TranslateService);
  scrollService = inject(TosectionService);

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
