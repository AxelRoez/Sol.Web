import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoEntrega } from '../Models/Tipo_entrega';
import { appsettings } from '../Setting/appsetting';

@Injectable({
  providedIn: 'root'
})
export class TipoEntregaService {
  private http = inject(HttpClient);
  private apiurl: string = appsettings.apiurl + "tipoEntrega";

  obtenerTipoEntrega(idTipoEntrega: number) {
    return this.http.get<TipoEntrega>(`${this.apiurl}/${idTipoEntrega}`);
  }
}
