import { Component, input } from '@angular/core';
import { LivroComponent } from '../livro/livro.component';
import { CommonModule } from '@angular/common';
import { IGenero } from '../livro/livro';
import { livros } from '../../mock-livros';

@Component({
  selector: 'app-genero',
  imports: [LivroComponent, CommonModule],
  templateUrl: './genero.component.html',
  styleUrl: './genero.component.css'
})

export class GeneroComponent {
  genero = input.required<IGenero>();
  livro = livros[0]
}