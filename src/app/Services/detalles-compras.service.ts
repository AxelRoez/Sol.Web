import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetalleCompra } from '../Models/detalles_compras';
import { appsettings } from '../Setting/appsetting';

@Injectable({
  providedIn: 'root'
})
export class DetalleCompraService {
  private http = inject(HttpClient);
  private apiurl: string = appsettings.apiurl + "detalleCompra";

  obtenerDetalleCompra(idDetalles: number) {
    return this.http.get<DetalleCompra>(`${this.apiurl}/${idDetalles}`);
  }
}
