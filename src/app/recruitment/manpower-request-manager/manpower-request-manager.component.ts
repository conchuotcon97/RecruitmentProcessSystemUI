import {Component, OnInit} from '@angular/core';
import {MrManage} from '../../model/mrManage';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {viewApplicantApprovals} from '../applicant-approval/applicant-approval.component';

@Component({
  selector: 'app-manpower-request-manager',
  templateUrl: './manpower-request-manager.component.html',
  styleUrls: ['./manpower-request-manager.component.scss']
})
export class ManpowerRequestManagerComponent implements OnInit {
  viewMRManages: MrManage[] = viewMRManages;
  myForm: FormGroup;
  apiURL = '';
  idRequiet: FormControl;
  position: FormControl;
  requieter: FormControl;
  quatity: FormControl;
  experince: FormControl;
  fromDate: FormControl;
  toDate: FormControl;

  constructor(protected httpClient: HttpClient) {
  }

  ngOnInit() {
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
    this.idRequiet = new FormControl('', Validators.required);
    this.position = new FormControl('', Validators.required);
    this.requieter = new FormControl('', Validators.required);
    this.quatity = new FormControl('', Validators.required);
    this.experince = new FormControl('', Validators.required);
    this.fromDate = new FormControl('', Validators.required);
    this.toDate = new FormControl('', Validators.required);

  }


  createForm() {
    this.myForm = new FormGroup({
      idRequiet: this.idRequiet,
      position: this.position,
      requieter: this.requieter,
      quatity: this.quatity,
      experince: this.experince,
      fromDate: this.fromDate,
      toDate: this.toDate,
    });

  }

}
export const viewMRManages =
  [
    {
    idRequiet: 1,
    position: 'Tuyển Font-End',
    requieter: 'Nguyễn Quang Trường',
    quatity: 5,
    experince: 'Junior',
    fromDate: '31/5/2019',
    toDate: '30/6/2019',
    approver: 'HR',
    status: 'Open'
  },
    {
      idRequiet: 2,
      position: 'Tuyển Font-End',
      requieter: 'Nguyễn Trọng Nhân',
      quatity: 5,
      experince: 'Junior',
      fromDate: '31/5/2019',
      toDate: '30/6/2019',
      approver: 'HR',
      status: 'Open'
    },
    {
      idRequiet: 3,
      position: 'Tuyển Font-End',
      requieter: 'Nguyễn Thi Trúc Phượng',
      quatity: 5,
      experince: 'Junior',
      fromDate: '31/5/2019',
      toDate: '30/6/2019',
      approver: 'HR',
      status: 'Open'
    },
    {
      idRequiet: 4,
      position: 'Tuyển Font-End',
      requieter: 'Trần Thị Phuong Thùy',
      quatity: 5,
      experince: 'Junior',
      fromDate: '31/5/2019',
      toDate: '30/6/2019',
      approver: 'HR',
      status: 'Open'
    }
  ]
