import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contato } from '../_models/contato';


const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
  };

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  enviar(contato: Contato): Observable<Contato[]> {
    return this.http.post<Contato[]>(this.baseUrl + 'Contato',  contato, httpOptions);
  }

}
