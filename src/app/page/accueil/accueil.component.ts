import { Component, OnInit } from '@angular/core';
import gsap from "gsap";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-accueil',
  imports: [TranslateModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent implements OnInit{

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
