import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-peel-sticker',
  imports: [TranslatePipe],
  templateUrl: './peel-sticker.html',
  styleUrl: './peel-sticker.scss',
})
export class PeelSticker {
  translate = inject(TranslateService);
  card1Peeled = false;
  card2Peeled = false;

  peelCard1(): void {
    this.card1Peeled = true;
  }

  peelCard2(): void {
    if (this.card1Peeled) {
      this.card2Peeled = true;
    }
  }
}
