import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params} from "@angular/router";
import {Location} from '@angular/common';
import {switchMap} from "rxjs/operators";
import {__param} from "tslib";
import {Observable} from "rxjs";
import {VacancyNhan} from "../../model/vacancyNhan";
import {CarrerService} from "../../service/carrer.service";

@Component({
  selector: 'app-detail-carer',
  templateUrl: './detail-carer.component.html',
  styleUrls: ['./detail-carer.component.scss']
})
export class DetailCarerComponent implements OnInit {
  vacancy: VacancyNhan;

  constructor(private  route: ActivatedRoute, private carrerService: CarrerService, private location: Location) {

  }

  ngOnInit() {
    this.getVacancyById();
    //   this.route.paramMap.pipe(
    //     switchMap((paramssss:ParamMap)=>this.carrerService.getVacancyById(paramssss.get('id')))
    //   ).subscribe(va=>this.vacancy=va);
    //
  }

  //
  getVacancyById(){
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.carrerService.getVacancyById(id).subscribe(vacan => this.vacancy = vacan);
  }
  goBack() {
    this.location.back();
  }

//   getVacancyById(){
// this.route.paramMap.pipe(
//   switchMap((paramssss:ParamMap)=>this.carrerService.getVacancyById(paramssss.get('id')))
// );


  // }

}
