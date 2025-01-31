import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true, // Standalone Component
  imports: [RouterOutlet , CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit{
  title = 'dani-pf';



   loading = true;

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
