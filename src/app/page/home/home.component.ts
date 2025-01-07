import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ProfileComponent } from "../profile/profile.component";
import { CompetenceComponent } from "../competence/competence.component";
import { SlideComponent } from "../slide/slide.component";

@Component({
  selector: 'app-home',
  imports: [NavBarComponent, ProfileComponent, CompetenceComponent, SlideComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  imagePath = '/assets/profile.jpg';
}
