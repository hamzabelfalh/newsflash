import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './client';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get<Client[]>('http://localhost:8080/Client');
  }
  create(payload: Client) {
    return this.http.post<Client>('http://localhost:8080/Client', payload);
  }
  getById(id: number) {
    return this.http.get<Client>(`http://localhost:8080/Client/${id}`);
   }
    
   update(payload:Client){
    return this.http.put(`http://localhost:8080/Client`,payload);
   }
   delete(id:number){
    return this.http.delete<Client>(`http://localhost:8080/Client/${id}`);
 }
}
