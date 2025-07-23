import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-project',
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  cards = [
    { id: 1, title: 'porfolio',image:'assets/portfolio.jpg' , description: 'Angular' },
    { id: 2, title: 'Gestion de Stoks' ,image:'assets/profile.jpg', description: 'Description 2' },
    { id: 3, title: 'Calculatrice' ,image:'assets/profile.jpg', description: ' Html /CSS / JavaScript' },

  ];

  startIndex = 0;
  cardsPerPage = 4;

  next() {
    if (this.startIndex + this.cardsPerPage < this.cards.length) {
      this.startIndex += this.cardsPerPage;
    }
  }


  prev() {
    if (this.startIndex - this.cardsPerPage >= 0) {
      this.startIndex -= this.cardsPerPage;
    }
  }

  // Obtenir les cartes actuellement visibles
  getVisibleCards() {
    return this.cards.slice(this.startIndex, this.startIndex + this.cardsPerPage);
  }
}
