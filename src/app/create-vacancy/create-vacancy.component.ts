import {Component, OnInit} from '@angular/core';
import {CarrerService} from '../service/carrer.service';
import {Position} from '../model/position.model';
import {PositionService} from '../service/position.service';
import {DepartmentService} from '../service/department.service';
import {Department} from '../model/department.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';
import {VacancyNhan} from '../model/vacancyNhan';


@Component({
  selector: 'app-create-vacancy',
  templateUrl: './create-vacancy.component.html',
  styleUrls: ['./create-vacancy.component.scss']
})
export class CreateVacancyComponent implements OnInit {
  ownedBy: string = this.authenticationService.getUsername();
  vacancys: VacancyNhan[];
  vacancy: VacancyNhan;
  positionList: Position[];
  departmentList: Department[];
  myForm: FormGroup;
  numberOpening: FormControl;
  dateClose: FormControl;
  description: FormControl;
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
    this.getVacancyList();
  }


  createFormControls() {
    const now = Date.now();
    this.numberOpening = new FormControl('', Validators.required);
    this.dateClose = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required);
    this.experience = new FormControl('', Validators.required);
    this.idDepartment = new FormControl(Number, Validators.required);
    this.typeOfStaff = new FormControl('', Validators.required);
    this.offer = new FormControl('', Validators.required);
    this.position = new FormControl('');
    this.departmentName = new FormControl('');
    this.idPosition = new FormControl('');
    this.positionName = new FormControl('');
  }


  createForm() {
    this.myForm = new FormGroup({
      numberOpening: this.numberOpening,
      dateClose: this.dateClose,
      description: this.description,
      experience: this.experience,
      offer: this.offer,
      gender: this.gender,
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
    const positionName = this.positionList.find(po => po.idPosition = id).positionName;
    this.positionName.setValue(positionName);
    // tslint:disable-next-line:radix
    this.idPosition.setValue(Number.parseInt(id));
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

  getVacancyList() {
    this.carrerService.getAllVacancy().subscribe((data: VacancyNhan[]) => {
      this.vacancys = data;
    });
  }

  getDepartmentList() {
    this.departmentService.getAllDepartment().subscribe((data: Department[]) => {
      this.departmentList = data;
    });
  }

  onsubmit() {
    console.log('log thu' + this.myForm.value);
    if (this.myForm.valid) {
      const result: VacancyNhan = Object.assign({}, this.myForm.value);
      console.log(result);
      this.carrerService.createVacancy(result).subscribe(data => this.vacancys.push(data));
      // console.log(this.myForm.value);
      this.myForm.reset();
    }

  }
}
