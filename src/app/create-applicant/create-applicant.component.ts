import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Position} from '../model/position.model';
import {PositionService} from '../service/position.service';
import {apiRoot} from '../app.component';
import {AuthenticationService} from '../service/authentication.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../model/user.model';

export class ApplicantVacancy {
}

@Component({
  selector: 'app-create-applicant',
  templateUrl: './create-applicant.component.html',
  styleUrls: ['./create-applicant.component.scss']
})
export class CreateApplicantComponent implements OnInit {
  positionList: Position[];
  myForm: FormGroup;
  id: FormControl;
  applicantVacancyName: FormControl;
  emailApplicant: FormControl;
  phone: FormControl;
  vacacyNumber: FormControl;
  idPosition: FormControl;
  positionName: FormControl;
  dateOnApplicantVacancy: FormControl;
  status: FormControl;
  experience: FormControl;
  listIdUser: FormControl;
  dateOfTheScheduleInterview: FormControl;
  startTime: FormControl;
  endTime: FormControl;
  cv: FormControl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${this.authenticationService.getToken()}`,
      'Access-Control-Allow-Origin': '*'
    })
  };
  applicants;
  interviewerList: User[] = [];

  constructor(protected httpClient: HttpClient, private positionService: PositionService,
              protected  authenticationService: AuthenticationService,
              protected  route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    console.log(this.authenticationService.getToken());
    this.createFormControls();
    this.createForm();
    this.getPositionList();
    this.getVacancyNumber();
    this.getListOfInterviewer();
  }


  getPositionList() {
    this.positionService.getAllPosition().subscribe((data: Position[]) => {
      this.positionList = data;
    });
  }

  getVacancyNumber(): string {
    return this.route.snapshot.paramMap.get('vacancyNumber');
  }

  onsubmit() {
    console.log(this.myForm.value);
    const body = Object.assign({}, this.myForm.value);
    // tslint:disable-next-line:max-line-length
    this.httpClient.post(`${apiRoot}/hr/applicantVacancy/${this.getVacancyNumber()}/addApplicantVacancy`, body, this.httpOptions).subscribe(data => {
        console.log(data);
      }
    );
    // if (this.myForm.valid) {
    //   console.log(this.myForm.value);
    //   this.myForm.reset();
    // }

  }


  createFormControls() {
    this.id = new FormControl('', Validators.required);
    this.applicantVacancyName = new FormControl('', Validators.required);
    this.emailApplicant = new FormControl('', Validators.required);
    this.phone = new FormControl('', Validators.required);
    this.vacacyNumber = new FormControl('', Validators.required);
    this.dateOnApplicantVacancy = new FormControl('', Validators.required);
    this.status = new FormControl('', Validators.required);
    this.experience = new FormControl('', Validators.required);
    this.listIdUser = new FormControl('', Validators.required);
    this.dateOfTheScheduleInterview = new FormControl('', Validators.required);
    this.startTime = new FormControl('', Validators.required);
    this.endTime = new FormControl('', Validators.required);
    this.cv = new FormControl('');
  }

  createForm() {
    this.myForm = new FormGroup({
      id: this.id,
      applicantVacancyName: this.applicantVacancyName,
      emailApplicant: this.emailApplicant,
      phone: this.phone,
      vacacyNumber: this.vacacyNumber,
      dateOnApplicantVacancy: this.dateOnApplicantVacancy,
      status: this.status,
      experience: this.experience,
      listIdUser: this.listIdUser,
      dateOfTheScheduleInterview: this.dateOfTheScheduleInterview,
      startTime: this.startTime,
      endTime: this.endTime,
      cv: this.cv
    });

  }

  selectPosition($event): FormControl {
    this.getPositionList();
    const id = $event;
    const positionName = this.positionList.find(po => po.idPosition = id).positionName;
    this.positionName.setValue(positionName);
    this.idPosition.setValue(Number.parseInt(id));
    return this.positionName;
  }

  getListOfInterviewer() {
    return this.httpClient.get(`${apiRoot}/hr/get-list`).subscribe((data: User[]) => {
      this.interviewerList = data;
    });
  }
}

