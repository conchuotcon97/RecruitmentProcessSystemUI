import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {apiRoot} from '../app.component';
import {Observable} from 'rxjs';
import {User} from '../model/user.model';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Basic ${this.authenticationService.getToken()}`
  });

  constructor(private httpClient: HttpClient, protected authenticationService: AuthenticationService) {
  }

  getAllUser() {
    return this.httpClient.get(`${apiRoot}/users`);
  }

  getProfileUser(): Observable<User> {
    return this.httpClient.get<User>(`${apiRoot}/user`, {headers: this.headers});

  }
  updateProfile(id: number): Observable<User>{
    return this.httpClient.put()
  }

}
