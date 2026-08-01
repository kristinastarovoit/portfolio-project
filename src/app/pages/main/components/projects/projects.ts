import { Component, inject } from '@angular/core';
import { ProjectsService } from '../../../../services/projects.service';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projectsService = inject(ProjectsService);
  projects = this.projectsService.projects;
}
