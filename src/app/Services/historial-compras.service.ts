import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HistorialCompra } from '../Models/Historial_compras';
import { appsettings } from '../Setting/appsetting';

@Injectable({
  providedIn: 'root'
})
export class HistorialCompraService {
  private http = inject(HttpClient);
  private apiurl: string = appsettings.apiurl + "historialCompra";

  obtenerHistorialCompra(idHistorial: number) {
    return this.http.get<HistorialCompra>(`${this.apiurl}/${idHistorial}`);
  }
}
