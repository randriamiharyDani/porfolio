import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ProfileComponent } from "../profile/profile.component";
import { CompetenceComponent } from "../competence/competence.component";
import { SlideComponent } from "../slide/slide.component";
import { FooterComponent } from '../footer/footer.component';
import gsap from "gsap";

@Component({
  selector: 'app-home',
  imports: [NavBarComponent, ProfileComponent, CompetenceComponent, SlideComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  imagePath = '/assets/profile.jpg';

   ngOnInit() {
    // Animation GSAP
    gsap.to(".img-fluid", {
      duration: 2,
      transition:3,
      x: 250,
      // y: 30,
      opacity: 0.9,
      ease: "power2.in"
    });
  }
}
