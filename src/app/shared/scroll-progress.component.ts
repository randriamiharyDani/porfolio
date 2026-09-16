import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  template: `
    <div
      class="fixed bottom-6 right-6 z-[60] flex h-16 w-16 items-center justify-center rounded-full bg-night-950/70 shadow-lg shadow-black/40 ring-1 ring-white/10 backdrop-blur-md transition-opacity duration-300"
      [class.opacity-0]="percent === 0"
      [class.opacity-100]="percent > 0">
      <svg class="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="29" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="4" />
        <circle
          class="transition-[stroke-dashoffset] duration-200 ease-out"
          cx="32" cy="32" r="29" fill="none"
          stroke="url(#scroll-gradient)" stroke-width="4" stroke-linecap="round"
          stroke-dasharray="182.21"
          [style.stroke-dashoffset.px]="182.21 - (182.21 * percent) / 100" />
        <defs>
          <linearGradient id="scroll-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#22d3ee" />
            <stop offset="100%" stop-color="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
      <span class="font-display text-sm font-bold text-white tabular-nums" [textContent]="percent + '%'"></span>
    </div>
  `,
})
export class ScrollProgressComponent {
  percent = 0;

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollY    = window.scrollY || document.documentElement.scrollTop;
    const docHeight  = document.documentElement.scrollHeight;
    const viewHeight = document.documentElement.clientHeight;
    this.percent = Math.round((scrollY / (docHeight - viewHeight)) * 100);
  }
}