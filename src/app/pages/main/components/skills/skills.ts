import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills = [
    {
      name: 'HTML',
      img: '/icons/skill_html.png'
    },
    {
      name: 'CSS',
      img: '/icons/skill_css.png'
    },
    {
      name: 'JavaScript',
      img: '/icons/skill_js.png'
    },
    {
      name: 'TypeScript',
      img: '/icons/skill_ts.png'
    },
    {
      name: 'Angular',
      img: '/icons/skill_angular.png'
    },
    {
      name: 'SASS',
      img: '/icons/skill_sass.svg'
    },
    {
      name: 'Git',
      img: '/icons/skill_git.png'
    },
    {
      name: 'REST-API',
      img: '/icons/skill_api.png'
    },
    {
      name: 'Scrum',
      img: '/icons/skill_scrum.png'
    }
  ]

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
