import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Observable} from "rxjs";
import {Review} from "../model/review";
import {apiRoot} from "../app.component";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Basic ${this.authenticationService.getToken()}`
  });

  constructor(
    protected httpClient: HttpClient,
    protected authenticationService: AuthenticationService,
  ) {


  }
  getAllReview(): Observable < Review[]> {
    return this.httpClient.get<Review[]>(`${apiRoot}/reviews`,{headers:this.headers});
  }

  addReview(idApplicant: number| string){
    return this.httpClient.post(`${apiRoot}/reviews/`+ idApplicant, {headers: this.headers});

  }
}
