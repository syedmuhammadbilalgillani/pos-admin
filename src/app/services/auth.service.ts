import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  user: {
    id: number;
    username: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl; // Replace with your actual API endpoint
  
  constructor(private http: HttpClient) { }
  
  login(credentials: LoginCredentials): Observable<LoginResponse> {
    console.log(this.apiUrl);
    return this.http.post<LoginResponse>(`${this.apiUrl}/super-admin/login`, credentials)
      .pipe(
        tap(response => {
          // Store token in localStorage
          localStorage.setItem('accessToken', response.accessToken);
          // localStorage.setItem('user', JSON.stringify(response.user));
        })
      );
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    // localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }
}