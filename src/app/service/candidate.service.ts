import {Injectable} from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import {Candidate} from '../model/candidate.model';
import {InterviewerScheduleI} from '../model/interviewer-scheduleI';
import {apiRoot} from '../app.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Basic ${this.authenticationService.getToken()}`
  });

  constructor(
    protected  httpClient: HttpClient,
    protected authenticationService: AuthenticationService
  ) {
  }


  // getApplicantsByIdVacancy(id: number | string): Observable<Map<Candidate, InterviewerScheduleI[]>> {
  // tslint:disable-next-line:max-line-length
  //   return this.httpClient.get<Map<Candidate, InterviewerScheduleI[]>>(`${apiRoot}/vacancys/` + id + `/applicants`, {headers: this.headers});
  // }

  getApplicantsByIdVacancy(id: number | string): Observable<any[]> {
    const map = this.httpClient.get(`${apiRoot}/vacancys/` + id + `/applicants/appISI`, {headers: this.headers});
    const applicants = this.httpClient.get(`${apiRoot}/vacancys/` + id + `/applicants`, {headers: this.headers});
    return forkJoin([map, applicants]);
  }
}
