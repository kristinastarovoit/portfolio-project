import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { TosectionService } from '../../services/tosection.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterOutlet, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  scrollService = inject(TosectionService);

}
