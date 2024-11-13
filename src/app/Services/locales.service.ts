import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Local } from '../Models/Locales';
import { appsettings } from '../Setting/appsetting';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  private http = inject(HttpClient);
  private apiurl: string = appsettings.apiurl + "local";

  obtenerLocal(idLocal: number) {
    return this.http.get<Local>(`${this.apiurl}/${idLocal}`);
  }
}
