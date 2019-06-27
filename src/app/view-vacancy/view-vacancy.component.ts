import {Component, OnInit} from '@angular/core';
import {CarrerService} from '../service/carrer.service';
import {VacancyNhan} from '../model/vacancyNhan';
import {AuthenticationService} from '../service/authentication.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {PositionService} from '../service/position.service';
import {DepartmentService} from '../service/department.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-vacancy',
  templateUrl: './view-vacancy.component.html',
  styleUrls: ['./view-vacancy.component.scss']
})
export class ViewVacancyComponent implements OnInit {

  vacancys: VacancyNhan[];
  myForm1: FormGroup;
  myForm: FormGroup;
  apiURL = '';
  submitted = false;
  idVacancy: FormControl;
  ownedBy: FormControl;
  status: FormControl;
  position: FormControl;
  dateClose: FormControl;
  typeOfStaff: FormControl;
  numberOpening: FormControl;
  offer: FormControl;
  vacancyNumber: FormControl;
  dateCreated: FormControl;
  description: FormControl;
  department: FormControl;
  requirement: FormControl;
  experience: FormControl;
  language: FormControl;
  gender: FormControl;
  degree: FormControl;
  constructor(private carrerService: CarrerService,
              private positionService: PositionService,
              private departmentService: DepartmentService,
              protected httpClient: HttpClient,
              private router: Router,
              private authenticationService: AuthenticationService,
              private fBuider: FormBuilder
  ) {
  }

  ngOnInit() {
    this.carrerService.getAllVacancy().subscribe((data: VacancyNhan[]) => this.vacancys = data);
    this.createFormControls1();
    this.createFormControls();
    this.createForm1();
    this.createForm();
  }

  onsubmit1() {
    if (this.myForm1.valid) {
      console.log(this.myForm1.value);
      this.httpClient.post(`${this.apiURL}/v00.acacyavhbjnk/`, this.myForm1.value);
      this.myForm1.reset();
    }
  }
  onsubmit() {
    if (this.myForm1.valid) {
      console.log(this.myForm1.value);
      this.httpClient.post(`${this.apiURL}/v00.acacyavhbjnk/`, this.myForm1.value);
      this.myForm1.reset();
    }
  }
  createFormControls1() {
    this.idVacancy = new FormControl('', Validators.required);
    this.ownedBy = new FormControl('', Validators.required);
    this.status = new FormControl('', Validators.required);
    this.position = new FormControl('', Validators.required);
    this.dateClose = new FormControl('', Validators.required);
    this.typeOfStaff = new FormControl('', Validators.required);
  }

  createForm1() {
    this.myForm1 = new FormGroup({
      idVacancy: this.idVacancy,
      ownedBy: this.ownedBy,
      status: this.status,
      position: this.position,
      dateClose: this.dateClose,
      typeOfStaff: this.typeOfStaff,
    });
  }
  createFormControls() {
    this.idVacancy = new FormControl('', Validators.required);
    this.ownedBy = new FormControl('', Validators.required);
    this.status = new FormControl('', Validators.required);
    this.position = new FormControl('', Validators.required);
    this.dateClose = new FormControl('', Validators.required);
    this.typeOfStaff = new FormControl('', Validators.required);
    this.numberOpening = new FormControl('', Validators.required);
    this.offer = new FormControl('', Validators.required);
    this.vacancyNumber = new FormControl('', Validators.required);
    this.dateCreated = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required);
    this.department = new FormControl('', Validators.required);
    this.requirement = new FormControl('', Validators.required);
    this.experience = new FormControl('', Validators.required);
    this.language = new FormControl('', Validators.required);
    this.gender = new FormControl('', Validators.required);
    this.degree = new FormControl('', Validators.required);
  }
  createForm() {
    this.myForm = new FormGroup({
      vacancyNumber: this.vacancyNumber,
      position: this.position,
      department: this.department,
      requirement: this.requirement,
      description: this.description,
      typeOfStaff: this.typeOfStaff,
      ownedBy: this.ownedBy,
      numberOpening: this.numberOpening,
      dateCreated: this.dateCreated,
      dateClose: this.dateClose,
      status: this.status,
    });
  }

  deleteVacancy(vacancy: VacancyNhan) {
    this.carrerService.deleteVacancy(vacancy.idVacancy).subscribe(data => {
        this.vacancys.splice(this.vacancys.indexOf(vacancy), 1);
      },
      error => {
      });

  }
  addVacancy(v:VacancyNhan){
    this.router.navigate(['create-applicant', v.vacancyNumber]);
    console.log(v);
  }


}


