import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initScrollReveal } from './shared/scroll-reveal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'portfolio';
  loading = true;
  private destroyReveal: (() => void) | null = null;

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1200);
  }

  ngAfterViewInit(): void {
    this.destroyReveal = initScrollReveal();
  }

  ngOnDestroy(): void {
    this.destroyReveal?.();
  }
}