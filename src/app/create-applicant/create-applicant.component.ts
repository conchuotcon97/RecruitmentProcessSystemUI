import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Position} from '../model/position.model';
import {PositionService} from '../service/position.service';
import {apiRoot} from '../app.component';
import {AuthenticationService} from '../service/authentication.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../model/user.model';
import {CarrerService} from "../service/carrer.service";
import {VacancyNhan} from "../model/vacancyNhan";

export class ApplicantVacancy {
}

@Component({
  selector: 'app-create-applicant',
  templateUrl: './create-applicant.component.html',
  styleUrls: ['./create-applicant.component.scss']
})
export class CreateApplicantComponent implements OnInit {
  myForm: FormGroup;
  id: FormControl;
  applicantVacancyName: FormControl;
  emailApplicant: FormControl;
  vacacyNumber: FormControl;
  dateOnApplicantVacancy: FormControl;
  status: FormControl;
  experience: FormControl;
  listIdUser: FormControl;
  dateOfTheScheduleInterview: FormControl;
  startTime: FormControl;
  endTime: FormControl;
  cv: FormControl;
  vacancy: VacancyNhan;
  vacancyNumbers: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${this.authenticationService.getToken()}`,
      'Access-Control-Allow-Origin': '*'
    })
  };
  applicants;
  interviewerList: User[] = [];

  constructor(protected httpClient: HttpClient, protected positionService: PositionService,
              protected  authenticationService: AuthenticationService,
              protected  route: ActivatedRoute,
              protected vacancyService: CarrerService,
  ) {
  }

  ngOnInit() {
    console.log(this.authenticationService.getToken());
    console.log(this.route.snapshot.paramMap.get('id'));
    this.createFormControls();
    this.createForm();
    this.getVacancy();
    // this.getListOfInterviewer();
  }


  getVacancy() {
    const idVacancy = this.route.snapshot.paramMap.get('idVacancy');
    console.log("idVacancy tao applicant"+ idVacancy);
    this.vacancyService.getVacancyById(idVacancy).subscribe(res => {
      this.vacancy = res, console.log(res)
    });
  }

  onsubmit() {
    console.log(this.myForm.value);
    const body = Object.assign({}, this.myForm.value);
  }

  // if (this.myForm.valid) {
  //   console.log(this.myForm.value);
  //   this.myForm.reset();
  // }


  createFormControls() {
    this.id = new FormControl('', Validators.required);
    this.applicantVacancyName = new FormControl('', Validators.required);
    this.emailApplicant = new FormControl('', Validators.required);
    this.vacacyNumber = new FormControl('');
    // this.vacacyNumber = new FormControl({{this.vacancy.vacancyNumber}});
    this.dateOnApplicantVacancy = new FormControl('', Validators.required);
    this.status = new FormControl('', Validators.required);
    this.listIdUser = new FormControl('', Validators.required);
    this.dateOfTheScheduleInterview = new FormControl('', Validators.required);
    this.startTime = new FormControl('', Validators.required);
    this.endTime = new FormControl('', Validators.required);
    this.cv = new FormControl('');
  }

  createForm() {
    this.myForm = new FormGroup({
      // id: this.id,
      applicantVacancyName: this.applicantVacancyName,
      emailApplicant: this.emailApplicant,
      // vacacyNumber: this.vacacyNumber,
      dateOnApplicantVacancy: this.dateOnApplicantVacancy,
      status: this.status,
      listIdUser: this.listIdUser,
      dateOfTheScheduleInterview: this.dateOfTheScheduleInterview,
      startTime: this.startTime,
      endTime: this.endTime,
      // cv: this.cv,
    });

  }


  // getListOfInterviewer() {
  //  const idDepartment=
  //   return this.httpClient.get(`${apiRoot}/user/`+idDepartment).subscribe((data: User[]) => {
  //     this.interviewerList = data;
  //   });
  // }
}

