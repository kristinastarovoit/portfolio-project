import { Component, inject, Signal } from '@angular/core';
import { TranslatePipe, TranslateDirective, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  translate = inject(TranslateService);

  currentLanguage = this.translate.currentLang;

  ngOnInit() {
    this.translate.use('en');
  }

  switchLanguage() {
    if (this.currentLanguage() == "en") {
      this.translate.use("de");
    } else if (this.currentLanguage() == "de") {
      this.translate.use("en");
    }
  }

  switchToSetLanguage(language: string) {
    this.translate.use(language);
  }

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.classList.toggle(
      'menu-open',
      this.isMenuOpen
    );
  }
}
