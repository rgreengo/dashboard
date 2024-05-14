import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Alcada } from '../models/alcada.model';

@Injectable({
  providedIn: 'root'
})
export class AlcadaService {
  urlObjeto: string;
  constructor(private http: HttpClient) {
  }

  lista(alcada: Alcada): Observable<Alcada[]> {
    let url = this.urlObjeto + '?';
    const params: URLSearchParams = new URLSearchParams();
    url += params.toString();
    return this.http.get<Alcada[]>(url);
  }

  obtem(codTipoAlcadaResgate: number): Observable<Alcada> {
    let url = `${this.urlObjeto}${codTipoAlcadaResgate}`;
    return this.http.get<Alcada>(url);
  }

  altera(alcada: Alcada): Observable<any> {
    let url = `${this.urlObjeto}${alcada.codTipoAlcadaResgate}`;
    return this.http.put(url, alcada);
  }

  exclui(alcada: Alcada[]): Observable<any> {
    return this.http.delete<Alcada>(this.urlObjeto, { body: alcada });
  }

  inclui(alcada: Alcada): Observable<Alcada> {
    return this.http.post<Alcada>(this.urlObjeto, alcada);
  }
}
