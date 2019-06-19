import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user.model';
import {BehaviorSubject, Observable, of, Subscribable} from 'rxjs';
import {apiRoot} from '../app.component';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public authenticated = false;
  currentUserSubject: BehaviorSubject<User>;
  currentUser: Observable<User>;
  user: User;

  constructor(
    private httpClient: HttpClient
  ) {

  }


  public getCurrentUserValue(): User {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    return this.currentUserSubject.value;
  }

  authenticate(username, password) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
   return this.httpClient.get(`${apiRoot}/user`, {headers}).pipe(
      map(
        (userData: User) => {
          console.log('aaaaaaaaaaaaaaaaa')
          console.log(userData);
          sessionStorage.setItem('token',
            btoa(username + ':' + password));
          sessionStorage.setItem('username', username);
          localStorage.setItem('currentUser', JSON.stringify(userData));
          return userData
        }));
  }


  getToken() {
    return sessionStorage.getItem('token');

  }

  getUsername() {
    return sessionStorage.getItem('username');
  }

// getCurrentUser():Observable<User>{
//  var currentUser=JSON.parse( sessionStorage.getItem('currentUser'));
//  return currentUser;
//
// }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }

}

export class Account {
  username: string;
  password: string;
}
