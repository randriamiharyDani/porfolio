import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ProfileComponent } from "../profile/profile.component";

@Component({
  selector: 'app-home',
  imports: [NavBarComponent, ProfileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  imagePath = '/assets/profile.jpg';
}
