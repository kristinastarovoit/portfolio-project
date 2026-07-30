import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
    {
      name: "Join",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      featured: true,
      img: "/img/join.png"
    },
    {
      name: "El Pollo Loco",
      description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      featured: false,
      img: "/img/elpolloloco.png"
    },
    {
      name: "PokéDex",
      description: "Interactive Pokédex app fetching dynamic data from the PokéAPI. Browse Pokémon, view detailed stats, types, and abilities in a clean, visual interface.",
      featured: false,
      img: "/img/pokedex.png"
    }
  ]
}
