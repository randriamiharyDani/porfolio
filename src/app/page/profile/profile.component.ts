import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface TechLogo {
  name: string;
  label: string;
  logo: string;
}

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

  orbit1: TechLogo[] = [
    { name: 'html5', label: 'HTML5', logo: 'https://cdn.simpleicons.org/html5/E34F26' },
    { name: 'css3', label: 'CSS3', logo: 'https://cdn.simpleicons.org/css3/1572B6' },
    { name: 'javascript', label: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'python', label: 'Python', logo: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'mysql', label: 'MySQL', logo: 'https://cdn.simpleicons.org/mysql/4479A1' },
    { name: 'angular', label: 'Angular', logo: 'https://cdn.simpleicons.org/angular/DD0031' },
    { name: 'nodedotjs', label: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  ];

  orbit2: TechLogo[] = [
    { name: 'react', label: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'laravel', label: 'Laravel', logo: 'https://cdn.simpleicons.org/laravel/FF2D20' },
    { name: 'tailwindcss', label: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'docker', label: 'Docker', logo: 'https://cdn.simpleicons.org/docker/2496ED' },
    { name: 'git', label: 'Git', logo: 'https://cdn.simpleicons.org/git/F05032' },
    { name: 'php', label: 'PHP', logo: 'https://cdn.simpleicons.org/php/777BB4' },
    { name: 'express', label: 'Express', logo: 'https://cdn.simpleicons.org/express/FFFFFF' },
  ];

  trackByName(_: number, item: TechLogo): string {
    return item.name;
  }
}