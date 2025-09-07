import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';
import { LikesService } from './likes.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;

  private http = inject(HttpClient);
  private likeService = inject(LikesService);

  currentUser = signal<User | null>(null);

  login(model: any) {
    let url = this.baseUrl + "account/login";
    return this.http.post<User>(url, model)
      .pipe(map(user => {
        if (user) {
          this.setCurrentUser(user);
        }
      }));
  }

  register(model: any) {
    let url = this.baseUrl + "account/register";
    return this.http.post<User>(url, model)
      .pipe(map(user => {
        if (user) {
          this.setCurrentUser(user);
        }
        return user;
      }));
  }

  setCurrentUser(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
    this.currentUser.set(user);
    this.likeService.getLikeIds();
  }

  logout() {
    localStorage.removeItem("user");
    this.currentUser.update(value => value = null);
  }
}
