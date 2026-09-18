import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials',
  imports: [TranslatePipe],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  testimonials = [
    {
      text: "app.testimonials.tobias",
      name: "Tobias Illner",
      position: "Fullstack Dev",
      className: "testimonials__card--one",
      github: "https://github.com/TobiasIllnerDev"
    },
    {
      text: "app.testimonials.anne",
      name: "Anne Manthey",
      position: "Fullstack Dev",
      className: "testimonials__card--two",
      github: "https://github.com/AnneManthey"
    }
  ]
}
