import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProfileComponent } from './page/profile/profile.component';

export const routes: Routes = [

  { path: '', component :HomeComponent },
  { path:'profil',component:ProfileComponent },

];
