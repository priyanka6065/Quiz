import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private headers: HttpHeaders;
  private URL: string = "http://localhost:14789/api/users";

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  getUsers() {
    return this.http.get<User[]>(this.URL);
  }

  createUser(user: User) {
    var result = JSON.stringify(user);
    return this.http.post(this.URL, result, { headers: this.headers });
  }

  updateUser(id: number, user: User) {
    var result = JSON.stringify(user);
    return this.http.put(this.URL + '/' + id, result, { headers: this.headers });
  }

  deleteUser(id: number) {
    return this.http.delete(this.URL + '/' + id);
  }

  getUserById(id: number) {
    return this.http.get<User>(this.URL + '/' + id);
  }

  login(user: User) {
    var result = JSON.stringify(user);
    return this.http.post(this.URL+'/login',result,{ headers: this.headers});
  }
}
