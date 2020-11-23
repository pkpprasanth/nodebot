import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private baseUrl = 'http://localhost:8090/event';

  constructor(private http: HttpClient) { }

  
  getMassage(question: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${question}`);
  }
  
  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
