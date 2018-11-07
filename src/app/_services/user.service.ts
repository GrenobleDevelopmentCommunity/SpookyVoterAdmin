import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>('/v1/users');
  }

  createUser(user: User): Observable<any> {
    return this.http.post('/v1/users', user);
  }

  uploadPhoto(nickname: String, photo: String): Observable<any> {
    return this.http.post('/v1/users/add-photo', {
      nickname: nickname,
      image: photo
    });
  }

  getWinners(): Observable<any> {
    return this.http.get<any>('/v1/users/winners');
  }

  getUsersByCategory(category: string): Observable<any> {
    if (category === 'adam') {
      return this.http.get<any>('/v1/users/male');
    }
    return this.http.get<any>('/v1/users/female');
  }

}
