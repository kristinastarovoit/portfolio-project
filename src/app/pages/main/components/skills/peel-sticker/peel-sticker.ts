import { Component } from '@angular/core';

@Component({
  selector: 'app-peel-sticker',
  imports: [],
  templateUrl: './peel-sticker.html',
  styleUrl: './peel-sticker.scss',
})
export class PeelSticker {
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
