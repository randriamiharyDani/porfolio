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
    { name: 'html5', label: 'HTML5', logo: 'assets/logos/html5.svg' },
    { name: 'css3', label: 'CSS3', logo: 'assets/logos/css3.svg' },
    { name: 'javascript', label: 'JavaScript', logo: 'assets/js.png' },
    { name: 'python', label: 'Python', logo: 'assets/logos/python.svg' },
    { name: 'mysql', label: 'MySQL', logo: 'assets/logos/mysql.svg' },
    { name: 'angular', label: 'Angular', logo: 'assets/logos/angular.svg' },
    { name: 'nodedotjs', label: 'Node.js', logo: 'assets/logos/nodedotjs.svg' },
  ];

  orbit2: TechLogo[] = [
    { name: 'react', label: 'React', logo: 'assets/logos/react.svg' },
    { name: 'laravel', label: 'Laravel', logo: 'assets/logos/laravel.svg' },
    { name: 'tailwindcss', label: 'Tailwind CSS', logo: 'assets/logos/tailwindcss.svg' },
    { name: 'docker', label: 'Docker', logo: 'assets/logos/docker.svg' },
    { name: 'git', label: 'Git', logo: 'assets/logos/git.svg' },
    { name: 'php', label: 'PHP', logo: 'assets/logos/php.svg' },
    { name: 'express', label: 'Express', logo: 'assets/logos/express.svg' },
  ];

  trackByName(_: number, item: TechLogo): string {
    return item.name;
  }
}