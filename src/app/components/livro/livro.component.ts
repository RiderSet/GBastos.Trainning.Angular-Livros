import { Component, input } from '@angular/core';
import { ILivro } from './livro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro',
  imports: [CommonModule],
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css'] // plural e array
})
export class LivroComponent {

  livro = input.required<ILivro>();  
  
  alternarFavorito() {
    this.livro().favorito = !this.livro().favorito; 
  }
}