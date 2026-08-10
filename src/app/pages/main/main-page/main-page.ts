import { Component, inject } from '@angular/core';
import { Header } from "../../../layout/header/header";
import { About } from "../components/about/about";
import { Skills } from "../components/skills/skills";
import { Projects } from "../components/projects/projects";
import { Testimonials } from "../components/testimonials/testimonials";
import { Contact } from "../components/contact/contact";
import { Footer } from "../../../layout/footer/footer";
import { Hero } from "../components/hero/hero";
import { Cursor } from '../../../cursor/cursor';
import { ActivatedRoute } from '@angular/router';
import { TosectionService } from '../../../services/tosection.service';

@Component({
  selector: 'app-main-page',
  imports: [Header, About, Skills, Projects, Testimonials, Contact, Footer, Hero, Cursor],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  private route = inject(ActivatedRoute);
  private tosectionService = inject(TosectionService);

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => this.tosectionService.scrollNow(fragment), 0);
      }
    });
  }
}
