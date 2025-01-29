import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Standalone Component
  imports: [RouterOutlet , CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dani-pf';
}
