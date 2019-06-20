import {Component, OnInit} from '@angular/core';
import {Review} from '../model/review';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Position} from '../model/position.model';
import {PositionService} from '../service/position.service';
import {CreateVacancyComponent} from '../create-vacancy/create-vacancy.component';
import {Department} from '../model/department.model';

@Component({
  selector: 'app-view-review-applicant',
  templateUrl: './view-review-applicant.component.html',
  styleUrls: ['./view-review-applicant.component.scss']
})
export class ViewReviewApplicantComponent implements OnInit {
  viewReviewApplicant: Review[] = viewReviewApplicant;
  myForm: FormGroup;
  myForm1: FormGroup;
  apiURL = '';
  results: string[] = ['Pass', 'Fail', 'Consider'];
  applicantNumber: FormControl;
  position: FormControl;
  positionRecommend: FormControl;
  technicalReview: FormControl;
  behaviorReview: FormControl;
  languageReview: FormControl;
  result: FormControl;
  note: FormControl;
  //   positionList: Position[];
  // departmentList: Department[];
  // departmentName: FormControl;
  // idDepartment: FormControl;
  // idPosition: FormControl;
  // positionName: FormControl;

  constructor(private positionService: PositionService, protected httpClient: HttpClient) {
  }

  ngOnInit() {
    this.createFormControls();
    this.createFormControls1();
    this.createForm();
    this.createForm1();
  }

  onsubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.httpClient.post(`${this.apiURL}/v00.acacyavhbjnk/`, this.myForm.value);
      this.myForm.reset();
    }
  }

  onsubmit1() {
    if (this.myForm1.valid) {
      console.log(this.myForm1.value);
      this.httpClient.post(`${this.apiURL}/v00.acacyavhbjnk/`, this.myForm1.value);
      this.myForm1.reset();
    }
  }

  createFormControls1() {
    this.applicantNumber = new FormControl('', Validators.required);
    this.position = new FormControl('', Validators.required);
    this.result = new FormControl('', Validators.required);
    // this.departmentName = new FormControl('');
    // this.idPosition = new FormControl('');
    // this.positionName = new FormControl('');
    // this.idDepartment = new FormControl(Number, Validators.required);
  }

  createForm1() {
    this.myForm1 = new FormGroup({
      applicantNumber: this.applicantNumber,
      position: this.position,
      result: this.result,
    });
  }

  createFormControls() {
    const now = Date.now();
    this.applicantNumber = new FormControl('', Validators.required);
    this.position = new FormControl('', Validators.required);
    this.positionRecommend = new FormControl('', Validators.required);
    this.technicalReview = new FormControl('', Validators.required);
    this.behaviorReview = new FormControl('', Validators.required);
    this.languageReview = new FormControl('', Validators.required);
    this.result = new FormControl('', Validators.required);
    this.note = new FormControl('', Validators.required);
    // this.departmentName = new FormControl('');
    // this.idPosition = new FormControl('');
    // this.positionName = new FormControl('');
    // this.idDepartment = new FormControl(Number, Validators.required);
  }

  createForm() {
    this.myForm = new FormGroup({
      applicantNumber: this.applicantNumber,
      positionRecommend: this.positionRecommend,
      technicalReview: this.technicalReview,
      behaviorReview: this.behaviorReview,
      languageReview: this.languageReview,
      result: this.result,
      note: this.note,
      position: this.position,
      //   department: new FormGroup({
      //     departmentName: this.departmentName,
      //     idDepartment: this.idDepartment
      //   }),
      //   position: new FormGroup({
      //     positionName: this.positionName,
      //     idPosition: this.idPosition
      //   })
    });
    // selectPosition($event): FormControl {
    //   this.getPositionList();
    //   const id = $event;
    //   // tslint:disable-next-line:triple-equals
    //   const positionName = this.positionList.find(po => po.idPosition = id).positionName;
    //   this.positionName.setValue(positionName);
    //   // tslint:disable-next-line:radix
    //   this.idPosition.setValue( Number.parseInt(id));
    //   return this.positionName;
    // }
    // getPositionList() {
    //   this.positionService.getAllPosition().subscribe((data: Position[]) => {
    //     this.positionList = data;
    //   });
    // }
    // openDiaLog() {
    //
  }
}

export const viewReviewApplicant = [
  {
    applicantNumber: 15130125,
    position: 'Tuyển Dev font-endTime',
    positionRecommend: 'Font-End',
    technicalReview: '7/10',
    behaviorReview: '7/10',
    languageReview: 'Java, Angular',
    result: 'pass',
    note: 'Lương 1000$'
  },
  {
    applicantNumber: 15130147,
    position: 'Tuyển Dev back-endTime',
    positionRecommend: 'Back-End',
    technicalReview: '4/10',
    behaviorReview: '7/10',
    languageReview: 'Java, DataBase',
    result: 'pass',
    note: 'Lương 1500$'
  }
];
