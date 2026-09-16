import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, TranslateModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  stats = [
    { value: '4+', key: 'PROFIL.STAT1' },
    { value: '8+', key: 'PROFIL.STAT2' },
    { value: '2+', key: 'PROFIL.STAT3' },
    { value: '5+', key: 'PROFIL.STAT4' },
  ];

  points = ['PROFIL.POINT1', 'PROFIL.POINT2', 'PROFIL.POINT3', 'PROFIL.POINT4'];
}