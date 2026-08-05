import { Component, signal } from '@angular/core';
import { MagicButton } from './magic-button/magic-button';
import { TranslatePipe } from '@ngx-translate/core';
interface Letter {
  char: string;
  active: boolean;
}

@Component({
  selector: 'app-hero',
  imports: [MagicButton, TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  words = signal<Letter[][]>([
    'Fullstack'.split('').map(char => ({ char, active: false })),
    'DEVELOPER'.split('').map(char => ({ char, active: false })),
  ]);

  toggleLetter(word: Letter[], letter: Letter) {
    letter.active = !letter.active;
  }

  setActive(letter: Letter, state: boolean) {
    letter.active = state;
  }

  displayChar(letter: Letter): string {
    if (!letter.active) return letter.char;
    // Groß- und Kleinschreibung umdrehen
    return letter.char === letter.char.toUpperCase()
      ? letter.char.toLowerCase()
      : letter.char.toUpperCase();
  }
}
