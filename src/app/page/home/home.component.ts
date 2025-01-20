import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ProfileComponent } from "../profile/profile.component";
import { CompetenceComponent } from "../competence/competence.component";
import { SlideComponent } from "../slide/slide.component";
import { FooterComponent } from '../footer/footer.component';
import gsap from "gsap";
import { AccueilComponent } from "../accueil/accueil.component";

@Component({
  selector: 'app-home',
  imports: [NavBarComponent, ProfileComponent, CompetenceComponent, SlideComponent, FooterComponent, AccueilComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {

}
