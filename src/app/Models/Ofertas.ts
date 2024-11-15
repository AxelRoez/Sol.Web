export class Ofertas {
  id_oferta: number;
  porcentaje_descuento: number;
  fecha_inicio: Date;
  fecha_fin: Date;
  estado: 'Activo' | 'Inactivo';

  constructor(id_oferta: number, porcentaje_descuento: number, fecha_inicio: Date, fecha_fin: Date, estado: 'Activo' | 'Inactivo') {
    this.id_oferta = id_oferta;
    this.porcentaje_descuento = porcentaje_descuento;
    this.fecha_inicio = fecha_inicio;
    this.fecha_fin = fecha_fin;
    this.estado = estado;
  }
}

  