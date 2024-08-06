import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = "http://localhost:3000/api/v1"

  constructor(private http: HttpClient) { }

  getProductos(complementoURL:string = "alimentos"){
    return this.http.get(`${this.apiUrl}/consultas-${complementoURL}`)
  }
}
