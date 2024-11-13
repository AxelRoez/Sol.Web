import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../Models/Pedidos';
import { appsettings } from '../Setting/appsetting';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private http = inject(HttpClient);
  private apiurl: string = appsettings.apiurl + "pedido";

  obtenerPedido(idPedido: number) {
    return this.http.get<Pedido>(`${this.apiurl}/${idPedido}`);
  }
}
