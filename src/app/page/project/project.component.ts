import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface Project {
  title: string;
  desc: string;
  image: string;
  tags: string[];
  github?: string;
  site?: string;
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
      image: 'assets/portfolio_dani.JPG',
      tags: ['Angular', 'Tailwind CSS', 'SSR'],
      site: 'https://example.com/portfolio',
      github: 'https://github.com/randriamiharyDani?tab=repositories',
    },
    {
      title: 'PROJECT.P6_TITLE',
      desc: 'PROJECT.P6_DESC',
      image: 'assets/doleance.JPG',
      tags: ['React', 'Tailwind CSS', 'Node.js', 'Express.js'],
      site: 'https://example.com/doleance',
      github: 'https://github.com/randriamiharyDani?tab=repositories',
    },
    {
      title: 'PROJECT.P7_TITLE',
      desc: 'PROJECT.P7_DESC',
      image: 'assets/multiservice-app.jpg',
      tags: ['React Native', 'Laravel API'],
      site: 'https://example.com/multiservice',
    },
  ];
}