import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-project');
  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem("language");
    this.translate.use(savedLang?? "en");
  }
}
