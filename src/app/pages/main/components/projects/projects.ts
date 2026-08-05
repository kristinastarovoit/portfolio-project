import { Component, inject } from '@angular/core';
import { ProjectsService } from '../../../../services/projects.service';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projectsService = inject(ProjectsService);
  projects = this.projectsService.projects;
}
