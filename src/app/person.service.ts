// src/app/person.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl = `${environment.apiUrl}/persons`; // Usa environment para la URL

  constructor(private http: HttpClient) { }

  getPersons(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addPerson(person: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, person);
  }

  updatePerson(id: number, person: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, person);
  }

  deletePerson(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
