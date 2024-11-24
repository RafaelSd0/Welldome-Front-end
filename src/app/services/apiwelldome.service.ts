import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIwelldomeService {

  private readonly URL: string = 'https://welldome-back-end.onrender.com';



  constructor(private http: HttpClient) {}

  // Método para obter todos os estados
  getEstados(): Observable<any[]> {
    return this.http.get<any[]>(`${this.URL}/estados`);
  }

  // Método para buscar dados de um estado específico
  getEstado(uf: string): Observable<any> {
    return this.http.get<any>(`${this.URL}/estados/${uf}`);
  }

}
