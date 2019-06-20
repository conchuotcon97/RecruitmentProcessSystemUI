import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {VacancyNhan} from '../model/vacancyNhan';
import {apiRoot} from '../app.component';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs';


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


  getAllVacancy(): Observable<VacancyNhan[]> {
    return this.httpClient.get<VacancyNhan[]>(`${apiRoot}/vacancys`, {headers: this.headers});
  }

  deleteVacancy(idVacancy: number): Observable<any> {
    console.log(idVacancy);
    return this.httpClient.delete(`${apiRoot}/vacancys/${idVacancy}`, {headers: this.headers});

  }

  createVacancy(vacancy: VacancyNhan): Observable<VacancyNhan> {
    // const body = JSON.parse(JSON.stringify(vacancy));
      return this.httpClient.post<VacancyNhan>(`${apiRoot}/vacancys`, vacancy, {headers: this.headers});
  }

  // getVacancyById(idVacancy: string): Observable<Vacancy>{
  //    let httpHeaders= new HttpHeaders().set('Accept','application/json');
  //
  // return this.httpClient.get<Vacancy>(this.apiRoot+'?idVacancy='+idVacancy,{headers:httpHeaders,responseType:'json'});
// getVacancyById(idVacancy:number| string){
//     return this.getAllVacancy().pipe(
//       map((vacancys:Vacancy[])=>vacancys.find(vacancy=>vacancy.idVacancy===+idVacancy))
//     );

  // }


}

