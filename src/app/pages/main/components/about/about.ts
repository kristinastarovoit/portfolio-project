import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import {TosectionService} from '../../../../services/tosection.service'

@Component({
  selector: 'app-about',
  imports: [TranslatePipe],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  scrollService = inject(TosectionService);
}
