import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { AccueilComponent } from '../accueil/accueil.component';
import { ProfileComponent } from '../profile/profile.component';
import { CompetenceComponent } from '../competence/competence.component';
import { ProjectComponent } from '../project/project.component';
import { SlideComponent } from '../slide/slide.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollProgressComponent } from '../../shared/scroll-progress.component';

@Component({
  selector: 'app-home',
  imports: [
    NavBarComponent,
    AccueilComponent,
    ProfileComponent,
    CompetenceComponent,
    ProjectComponent,
    SlideComponent,
    FooterComponent,
    ScrollProgressComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}