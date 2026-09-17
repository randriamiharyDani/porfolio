import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface Skill {
  name: string;
  level: number;
}

interface SkillGroup {
  icon: string;
  title: string;
  items: Skill[];
}

@Component({
  selector: 'app-competence',
  imports: [CommonModule, TranslateModule],
  templateUrl: './competence.component.html',
  styleUrl: './competence.component.scss',
})
export class CompetenceComponent {
  skillGroups: SkillGroup[] = [
    {
      icon: 'M2 12l3-7 3 7m-6 0h6m-6 0c1 0 1.5.5 2 1.5S7 15 8 15s1.5.5 2 .5M2 12c1 0 1.5.5 2 1.5S6 15 7 15m3-3l3-7 3 7m-6 0h6m-6 0c1 0 1.5.5 2 1.5s2 1.5 3 1.5 2 0 2.5.5m0 0l1.5-3.5 3 1.5-1.5 3.5m-3-1.5c-.5 1-1 1.5-1.5 1.5M14 12c1 0 1.5.5 2 1.5s2 1 3 1',
      title: 'SKILL.CAT_FRONT',
      items: [
        { name: 'Angular', level: 70 },
        { name: 'HTML5', level: 90 },
        { name: 'CSS / SCSS', level: 80 },
        { name: 'TypeScript', level: 70 },
        { name: 'React', level: 65 },
      ],
    },
    {
      icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
      title: 'SKILL.CAT_BACK',
      items: [
        { name: 'Laravel', level: 80 },
        { name: 'PHP', level: 65 },
        { name: 'CodeIgniter', level: 70 },
        { name: 'APIs REST', level: 80 },
        { name: 'Node.js', level: 65 },
        { name: 'Express.js', level: 60 },
      ],
    },
    {
      icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
      title: 'SKILL.CAT_MOBILE',
      items: [
        { name: 'React Native', level: 60 },
        { name: 'JavaScript', level: 75 },
      ],
    },
    {
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      title: 'SKILL.CAT_TOOLS',
      items: [
        { name: 'Git & GitHub', level: 70 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'JQuery', level: 60 },
        { name: 'MySQL / SQL', level: 70 },
        { name: 'Docker', level: 55 },
      ],
    },
  ];

  softSkills = [
    { key: 'SKILL.CREATIVITY', level: 80 },
    { key: 'SKILL.COMMUNICATION', level: 75 },
    { key: 'SKILL.TROUBLESHOOTING', level: 85 },
    { key: 'SKILL.TEAMWORK', level: 80 },
  ];

  education = [
    { title: 'Master 2', period: 'TRAINNING.PERIOD_MASTER2', text: 'TRAINNING.MASTER2' },
    { title: 'Master 1', period: '2023', text: 'TRAINNING.MASTER1' },
    { title: 'Licence en Informatique', period: '2021 - 2022', text: 'TRAINNING.LICENCE' },
    { title: "Deuxième Année en Informatique", period: '2020 - 2021', text: 'TRAINNING.2EME_ANNEE' },
    { title: 'Baccalauréat Série D', period: '2018', text: 'TRAINNING.BACC' },
  ];

  experience = [
    {
      org: "Commune Urbaine d'Antananarivo",
      role: 'Développeur Full-Stack',
      period: 'TRAINNING.TASK_DESC0',
      text: 'TRAINNING.TASK_DESC1',
      tags: ['Angular', 'Laravel', 'Node.js', 'Express.js', 'React'],
    },
    {
      org: 'ProDéCID / GIZ',
      role: 'Développeur Full-Stack',
      period: 'TRAINNING.DATEGIZ',
      text: 'TRAINNING.TASK_DESC2',
      tags: ['Angular', 'Laravel'],
    },
    {
      org: 'TRAINNING.NIRINFO',
      role: 'Développeur Web',
      period: 'TRAINNING.DATE_NIRINFO',
      text: 'TRAINNING.TASK_DESC3',
      tags: ['React Native', 'CodeIgniter'],
    },
    {
      org: 'TRAINNING.CENTIC',
      role: 'TRAINNING.CERTIFICAT',
      period: 'TRAINNING.DATE_CENTIC',
      text: 'TRAINNING.TASK_DESC4',
      tags: ['CodeIgniter'],
    },
  ];

  softSkillOffset(level: number): number {
    return 220 - (level / 100) * 220;
  }
}