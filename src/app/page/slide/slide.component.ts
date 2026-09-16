import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MiniCosmosComponent } from '../mini-cosmos/mini-cosmos.component';

@Component({
  selector: 'app-slide',
  imports: [TranslateModule, MiniCosmosComponent],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.scss',
})
export class SlideComponent {}