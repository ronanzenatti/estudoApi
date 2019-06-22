import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  public getUsers(page = 1) {
    return this.http.get(`${this.url}?page=${page}`);
  }

  public getUser(id) {
    return this.http.get(`${this.url}/${id}`);
  }
}
