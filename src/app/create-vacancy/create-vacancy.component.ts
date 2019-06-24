import {Component, Inject, Input, OnInit} from '@angular/core';
import {CarrerService} from '../service/carrer.service';
import {Position} from '../model/position.model';
import {PositionService} from '../service/position.service';
import {DepartmentService} from '../service/department.service';
import {Department} from '../model/department.model';
import {Form, FormBuilder} from '@angular/forms';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {AuthenticationService} from '../service/authentication.service';
import {VacancyNhan} from '../model/vacancyNhan';
import {of} from 'rxjs';
import {apiRoot} from '../app.component';


@Component({
  selector: 'app-create-vacancy',
  templateUrl: './create-vacancy.component.html',
  styleUrls: ['./create-vacancy.component.scss']
})
export class CreateVacancyComponent implements OnInit {
  ownedBy: string = this.authenticationService.getUsername();
  vacancy: VacancyNhan;
  positionList: Position[];
  departmentList: Department[];
  myForm: FormGroup;
  numberOpening: FormControl;
  dateClose: FormControl;
  description: FormControl;
  degree: FormControl;
  offer: FormControl;
  state: FormControl;
  position: FormControl;
  experience: FormControl;
  gender: FormControl;
  typeOfStaff: FormControl;
  departmentName: FormControl;
  idDepartment: FormControl;
  idPosition: FormControl;
  positionName: FormControl;
  requirement: FormControl;

  constructor(private carrerService: CarrerService,
              private positionService: PositionService,
              private departmentService: DepartmentService,
              protected httpClient: HttpClient,
              private router: Router,
              private authenticationService: AuthenticationService,

  ) {
  }

  ngOnInit() {
    this.getPositionList();
    this.getDepartmentList();
    this.createFormControls();
    this.createForm();
  }


  createFormControls() {
    const now = Date.now();
    this.numberOpening = new FormControl('', Validators.required);
    this.dateClose = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required);
    this.degree = new FormControl('', Validators.required);
    this.state = new FormControl('', Validators.required);
    this.experience = new FormControl('', Validators.required);
    this.idDepartment = new FormControl(Number, Validators.required);
    // this.gender = new FormControl('', Validators.required);
    this.typeOfStaff = new FormControl('', Validators.required);
    this.offer = new FormControl('', Validators.required);
    this.position = new FormControl('');
    this.departmentName = new FormControl('');
    this.idPosition = new FormControl('');
    this.positionName = new FormControl('');
    this.requirement = new FormControl('');
  }


  createForm() {
    this.myForm = new FormGroup({
      requirement: this.requirement,
      numberOpening: this.numberOpening,
      dateClose: this.dateClose,
      description: this.description,
      // degree: this.degree,
      experience: this.experience,
      state: this.state,
      offer: this.offer,
      // gender: this.gender,
      typeOfStaff: this.typeOfStaff,
      department: new FormGroup({
        departmentName: this.departmentName,
        idDepartment: this.idDepartment
      }),
      position: new FormGroup({
        positionName: this.positionName,
        idPosition: this.idPosition
      })
    });
  }

  selectPosition($event): FormControl {
    this.getPositionList();
    const id = $event;
    // tslint:disable-next-line:triple-equals
    const positionName = this.positionList.find(po => po.idPosition = id).positionName;
    this.positionName.setValue(positionName);
    // tslint:disable-next-line:radix
    this.idPosition.setValue( Number.parseInt(id));
    return this.positionName;
  }

  select($event): FormControl {
    this.getDepartmentList();
    const id = $event;
    let name = '';
    name = this.departmentList.find(de => de.idDepartment = id).departmentName;
    this.departmentName.setValue(name);
    // tslint:disable-next-line:radix
    this.idDepartment.setValue(Number.parseInt(id));
    return this.departmentName;
  }


  getPositionList() {
    this.positionService.getAllPosition().subscribe((data: Position[]) => {
      this.positionList = data;
    });
  }

  getDepartmentList() {
    this.departmentService.getAllDepartment().subscribe((data: Department[]) => {
      this.departmentList = data;
    });
  }

  onsubmit() {
   this.carrerService.createVacancy(this.myForm.value).subscribe();
    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
