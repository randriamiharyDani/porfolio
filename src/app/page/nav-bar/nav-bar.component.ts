import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, TranslateModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  menuOpen = false;
  scrolled = false;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('fr');
    this.translate.use(this.savedLang);
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
    return this.translate.currentLang;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.scrolled = window.scrollY > 30;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    this.closeMenu();
  }
}