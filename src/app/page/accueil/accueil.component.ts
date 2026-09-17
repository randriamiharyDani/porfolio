import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CosmosComponent } from '../cosmos/cosmos.component';

@Component({
  selector: 'app-accueil',
  imports: [TranslateModule, CosmosComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss',
})
export class AccueilComponent implements OnInit, OnDestroy {
  imagePath = '/assets/hello.jpeg';

  roles = ['ACCUEIL.ROLE1', 'ACCUEIL.ROLE2', 'ACCUEIL.ROLE3'];
  typedText = '';
  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer: ReturnType<typeof setTimeout> | undefined;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    if (typeof window === 'undefined') return;
    this.typeLoop();
  }

  private typeLoop(): void {
    const full = (this.translate.instant(this.roles[this.roleIndex]) as string) || '';

    if (!this.deleting) {
      this.typedText = full.slice(0, ++this.charIndex);
      if (this.charIndex === full.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.typeLoop(), 1700);
        return;
      }
    } else {
      this.typedText = full.slice(0, --this.charIndex);
      if (this.charIndex === 0) {
        this.deleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
    }

    this.timer = setTimeout(() => this.typeLoop(), this.deleting ? 38 : 85);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}