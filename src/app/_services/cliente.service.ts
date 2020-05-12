import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../_models/cliente';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
  };

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl + 'Cliente', httpOptions);
  }

  getCliente(id): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl + 'Cliente/' + id, httpOptions);
  }

  deleteCliente(id): Observable<Cliente[]> {
    return this.http.delete<Cliente[]>(this.baseUrl + 'Cliente/' + id, httpOptions);
  }
}
