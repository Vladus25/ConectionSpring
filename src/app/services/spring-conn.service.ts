import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpringConnService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(`${this.baseUrl}/getAllUsers`);
  }

  getAutoUser(userId: number) {
    return this.http.get(`${this.baseUrl}/cars/users/${userId}`);
  }

  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/users/${userId}`);
  }

  getAllCars() {
    return this.http.get(`${this.baseUrl}/getAllCars`);
  }

}
