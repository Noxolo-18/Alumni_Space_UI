import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'config';

@Injectable({
  providedIn: 'root'
})
export class JobAppService {

  private apiUrl  =`${baseUrl}/jobs`
 // private apiUrl = 'http://localhost:3000/api/jobs/applications';

  constructor(private http: HttpClient) {}
  getApplications(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/applications`);
  }
}
