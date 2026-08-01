import { Component, inject } from '@angular/core';
import { ProjectsService } from '../../../../services/projects.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projectsService = inject(ProjectsService);
  projects = this.projectsService.projects;
}
