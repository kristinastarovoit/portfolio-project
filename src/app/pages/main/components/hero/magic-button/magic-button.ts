import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-magic-button',
  imports: [TranslatePipe],
  templateUrl: './magic-button.html',
  styleUrl: './magic-button.scss',
})
export class MagicButton {}
