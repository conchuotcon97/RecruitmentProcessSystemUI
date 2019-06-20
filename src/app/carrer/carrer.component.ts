import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarrerService} from '../service/carrer.service';
import {PositionService} from '../service/position.service';
import {VacancyNhan} from '../model/vacancyNhan';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DepartmentService} from '../service/department.service';
// import {Position} from '../model/position.model';
// import {Department} from '../model/department.model';

@Component({
  selector: 'app-carrer',
  templateUrl: './carrer.component.html',
  styleUrls: ['./carrer.component.scss']
})
export class CarrerComponent implements OnInit {
  myForm: FormGroup;
  apiURL = '';
  position: FormControl;
  dateClose: FormControl;
  slOpening: FormControl;

  // vacancies: VacancyNhan[] = vacancies;

  constructor(private carrerService: CarrerService,
              private positionService: PositionService,
              private departmentService: DepartmentService,
              protected httpClient: HttpClient
  ) {
  }

  ngOnInit() {
    // const jobsObservable = this.carrerService.getAllVacancy();
    // jobsObservable.subscribe((data: VacancyNhan[]) => {
    //   this.vacancies = data;
    // });
    this.createFormControls();
    this.createForm();
  }

  onsubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.httpClient.post(`${this.apiURL}/v00.acacyavhbjnk/`, this.myForm.value);
      this.myForm.reset();
    }
  }

  createFormControls() {
    this.position = new FormControl('', Validators.required);
    this.dateClose = new FormControl('', Validators.required);
    this.slOpening = new FormControl('', Validators.required);
  }

  createForm() {
    this.myForm = new FormGroup({
      position: this.position,
      dateClose: this.dateClose,
      slOpening: this.slOpening
    });

  }

}

export const vacancies = [{
  idVacancy: 1,
  vacancyNumber: '123',
  dateCreated: '20/3/2018',
  ownedBy: 'chi Thuy',
  state: 'opening',
  position: 'Tuyển Dev font-endTime',
  description: 'Dịch các tài liệu về kỹ thuật từ tiếng Nhật sang tiếng Việt và từ tiếng Việt sang tiếng Nhật',
  slOpening: 50,
  department: 'IT1',
  dateClose: '20/5/2018',
  requirement: 'Tiếng Nhật giao tiếp tốt (nói và viết), bằng N2 trở lên hoặc tương đương',
  offer: 'Mức lương cạnh tranh',
  experience: 'Fresher',
  language: 'Java, Angular',
  gender: 'Male',
  degree: 'Đh',
  typeOfStaff: 'Full Time'
}
];

