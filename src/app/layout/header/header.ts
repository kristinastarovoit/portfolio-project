import { Component, inject, Signal } from '@angular/core';
import { TranslatePipe, TranslateDirective, TranslateService } from "@ngx-translate/core";
import { TosectionService } from '../../services/tosection.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  translate = inject(TranslateService);
  scrollService = inject(TosectionService);

  currentLanguage = this.translate.currentLang;

  switchLanguage() {
    if (this.currentLanguage() == "en") {
      this.translate.use("de");
      localStorage.setItem("language", "de");
      console.log("gespeichert:", localStorage.getItem("language"));
    } else if (this.currentLanguage() == "de") {
      this.translate.use("en");
      localStorage.setItem("language", "en");
      console.log("gespeichert:", localStorage.getItem("language"));
    }
  }

  switchToSetLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem("language", language);
  }

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.classList.toggle(
      'menu-open',
      this.isMenuOpen
    );
  };
}
