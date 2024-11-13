export class Categoria {
  id_categoria: number;
  nombre_cat: string;
  cat_url: string;

  constructor(id_categoria: number, nombre_cat: string, cat_url: string) {
    this.id_categoria = id_categoria;
    this.nombre_cat = nombre_cat;
    this.cat_url = cat_url;
  }
}
