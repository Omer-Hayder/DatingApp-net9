import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = "https://localhost:5001/api/";
  private http = inject(HttpClient);
  currentUser = signal<User | null>(null);

  login(model: any) {
    let url = this.baseUrl + "account/login";
    return this.http.post<User>(url, model)
      .pipe(map(user => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUser.set(user);
        }
      }));
  }

  register(model: any) {
    let url = this.baseUrl + "account/register";
    return this.http.post<User>(url, model)
      .pipe(map(user => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUser.set(user);
        }
        return user;
      }));
  }

  logout() {
    localStorage.removeItem("user");
    this.currentUser.update(value => value = null);
  }
}
