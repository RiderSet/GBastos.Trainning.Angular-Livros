export interface ILivro{
  titulo: string;
  autor: string;
  genero: IGenero;
  favorito: boolean;
  imagem: string;
}

export interface IGenero{
  id: string,
  value: string,
  livros: ILivro[]
}