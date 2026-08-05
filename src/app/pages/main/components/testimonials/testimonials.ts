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
      text: "Kristina ist so cool",
      name: "Max Mustermann",
      position: "Frontend Dev",
      className: "testimonials__card--one"
    },
    {
      text: "Kristina ist so toll",
      name: "Peter Hans",
      position: "Frontend Dev",
      className: "testimonials__card--two"
    },
    {
      text: "Kristina ist so gut gebräunt und gutaussehend",
      name: "Michael Jackson",
      position: "Legende",
      className: "testimonials__card--three"
    }
  ]
}
