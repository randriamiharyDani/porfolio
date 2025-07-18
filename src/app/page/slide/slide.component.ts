import { Component } from '@angular/core';
import { CosmosComponent } from "../cosmos/cosmos.component";
import { MiniCosmosComponent } from "../mini-cosmos/mini-cosmos.component";

@Component({
  selector: 'app-slide',
  imports: [CosmosComponent, MiniCosmosComponent],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.scss'
})
export class SlideComponent {
  slideTexte = "En cours de recherche d'un travail";
}
