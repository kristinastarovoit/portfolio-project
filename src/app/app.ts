import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";
import { Footer } from "./layout/footer/footer";
import { Hero } from "./pages/main/components/hero/hero";
import { About } from "./pages/main/components/about/about";
import { Skills } from "./pages/main/components/skills/skills";
import { Projects } from "./pages/main/components/projects/projects";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Hero, About, Skills, Projects],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-project');
}
