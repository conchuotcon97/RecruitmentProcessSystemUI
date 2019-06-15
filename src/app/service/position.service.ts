import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
@Injectable({providedIn:'root'})
export class PositionService{
  constructor(private httpClient:HttpClient){}

  getAllPosition(){
    return this.httpClient.get('http://localhost:8080/RecruitmentProcessSystem/titleList')
  }
}
