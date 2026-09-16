import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface Project {
  title: string;
  desc: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

@Component({
  selector: 'app-project',
  imports: [CommonModule, TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  projects: Project[] = [
    {
      title: 'PROJECT.P1_TITLE',
      desc: 'PROJECT.P1_DESC',
      image: 'assets/portfolio.jpg',
      tags: ['Angular', 'Tailwind CSS', 'SSR'],
      github: 'https://github.com/randriamiharyDani?tab=repositories',
    },
    {
      title: 'PROJECT.P2_TITLE',
      desc: 'PROJECT.P2_DESC',
      image: 'assets/couverture.jpg',
      tags: ['Angular', 'Laravel'],
    },
    {
      title: 'PROJECT.P3_TITLE',
      desc: 'PROJECT.P3_DESC',
      image: 'assets/cta01.jpg',
      tags: ['Angular', 'Laravel', 'APIs REST'],
    },
    {
      title: 'PROJECT.P4_TITLE',
      desc: 'PROJECT.P4_DESC',
      image: 'assets/phone.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'PROJECT.P5_TITLE',
      desc: 'PROJECT.P5_DESC',
      image: 'assets/boys.png',
      tags: ['React Native', 'CodeIgniter', 'API'],
    },
  ];
}