import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, TranslateModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent implements OnInit {
  menuOpen = false;
  scrolled = false;
  activeSection = 'accueil';

  navLinks = [
    { href: '#accueil', label: 'NAV.HOME' },
    { href: '#profil', label: 'NAV.ABOUT' },
    { href: '#competences', label: 'NAV.SKILLS' },
    { href: '#projets', label: 'NAV.PROJECTS' },
    { href: '#contact', label: 'NAV.CONTACT' },
  ];

  private sectionIds = ['accueil', 'profil', 'competences', 'projets', 'contact'];

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('fr');
    this.translate.use(this.savedLang);
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.updateActiveSection();
    }
  }

  private get savedLang(): string {
    try {
      return typeof localStorage !== 'undefined'
        ? (localStorage.getItem('lang') || 'fr')
        : 'fr';
    } catch {
      return 'fr';
    }
  }

  get currentLang(): string {
    return this.translate.currentLang || this.savedLang;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (typeof window === 'undefined') return;
    this.scrolled = window.scrollY > 30;
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const offset = 140;
    let current = this.sectionIds[0];
    for (const id of this.sectionIds) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= offset) {
        current = id;
      }
    }
    this.activeSection = current;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  openMenu(): void {
    this.menuOpen = true;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeMenu();
    }
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    this.closeMenu();
  }
}