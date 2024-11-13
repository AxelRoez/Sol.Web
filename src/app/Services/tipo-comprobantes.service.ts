import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoComprobante } from '../Models/Tipos_comprobantes';
import { appsettings } from '../Setting/appsetting';

@Injectable({
  providedIn: 'root'
})
export class TipoComprobanteService {
  private http = inject(HttpClient);
  private apiurl: string = appsettings.apiurl + "tipoComprobante";

  obtenerTipoComprobante(idTipoComprobante: number) {
    return this.http.get<TipoComprobante>(`${this.apiurl}/${idTipoComprobante}`);
  }
}
