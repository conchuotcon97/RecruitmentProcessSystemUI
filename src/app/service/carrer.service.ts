import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {VacancyNhan} from '../model/vacancyNhan';
import {apiRoot} from '../app.component';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";
import {Candidate} from "../model/candidate.model";
import {User} from "../model/user.model";
import {InterviewerScheduleI} from "../model/interviewer-scheduleI";


@Injectable()
export class CarrerService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Basic ${this.authenticationService.getToken()}`
  });

  constructor(
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService
  ) {
  }


  getAllVacancy() {
    return this.httpClient.get(`${apiRoot}/vacancys`, {headers: this.headers});
  }

  deleteVacancy(idVacancy: number): Observable<any> {
    console.log(idVacancy);
    return this.httpClient.delete(`${apiRoot}/vacancys/${idVacancy}`, {headers: this.headers});

  }

  createVacancy(vacancy: VacancyNhan) {
    // let body = JSON.parse(JSON.stringify(vacancy));

    return this.httpClient.post(`${apiRoot}/vacancys`, vacancy, {headers: this.headers});

  }

  getApplicantsByIdVacancy(id: number | string): Observable<Map<Candidate,InterviewerScheduleI[]>> {
    return this.httpClient.get<Map<Candidate,InterviewerScheduleI[]>>(`${apiRoot}/vacancys/`+id+`/applicants`,{headers: this.headers});
  }

  // getAllVacancy(){
  //   return this.httpClient.get('http://localhost:8080/RecruitmennpmtProcessSystem/')
  // }
  // getVacancyById(id): Observable<VacancyNhan> {
  //   return of(vacancies.find(vacancy => vacancy.idVacancy == id));
  //
  // }
  // getVacancyById(idVacancy: string): Observable<Vacancy>{
  //    let httpHeaders= new HttpHeaders().set('Accept','application/json');
  //
  // return this.httpClient.get<Vacancy>(this.apiRoot+'?idVacancy='+idVacancy,{headers:httpHeaders,responseType:'json'});
  getVacancyById(idVacancy: number | string) {
    return this.getAllVacancy().pipe(
      map((vacancys: VacancyNhan[]) => vacancys.find(vacancy => vacancy.idVacancy === +idVacancy))
    );

  }


}

