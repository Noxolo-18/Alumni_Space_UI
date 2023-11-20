// admin-table.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminTableService {
  private apiUrl = 'http://your-backend-api-url'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  getQueries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/queries`);
  }

  submitResponse(queryId: string, response: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/queries/${queryId}/respond`, { response });
  }
}
