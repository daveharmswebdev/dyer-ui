import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RunWorkoutService {
  constructor(private http: HttpClient) {}
  getRuns() {
    return this.http.get(environment.baseUrl + '/api/v1/runs');
  }
}
