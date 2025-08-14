import { Component, OnInit } from '@angular/core';
import { IGenero, ILivro } from '../livro/livro';
import { livros } from '../../mock-livros';
import { GeneroComponent } from "../genero/genero.component";

@Component({
  selector: 'app-lista-livros',
  imports: [GeneroComponent],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent implements OnInit {
  generos: IGenero[] = [];
  livrosPorGenero: Map<string, ILivro[]> = new Map();

ngOnInit() {
    this.livrosPorGenero = new Map();

    livros.forEach((livro) => {
      const generoId = livro.genero.id;
      if (!this.livrosPorGenero.has(generoId)) {
        this.livrosPorGenero.set(generoId, []);
      }
      this.livrosPorGenero.get(generoId)?.push(livro)
    })

    this.generos = [
      {
        id: 'romance',
        value: 'Romance',
        livros: this.livrosPorGenero.get('romance') || []
      },
      {
        id: 'ficcao',
        value: 'Ficção',
        livros: this.livrosPorGenero.get('ficcao') || []
      },
      {
        id: 'misterio',
        value: 'Misterio',
        livros: this.livrosPorGenero.get('misterio') || []
      },
      {
        id: 'fantasia',
        value: 'Fantasia',
        livros: this.livrosPorGenero.get('fantasia') || []
      },
      {
        id: 'terror',
        value: 'Terror',
        livros: this.livrosPorGenero.get('terror') || []
      },
      {
        id: 'classicos',
        value: 'Classicos',
        livros: this.livrosPorGenero.get('classicos') || []
      }
    ]

   // console.log(this.livrosPorGenero);
    
}
}