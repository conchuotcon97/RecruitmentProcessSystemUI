import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-view-applicant',
  templateUrl: './view-applicant.component.html',
  styleUrls: ['./view-applicant.component.scss']
})
export class ViewApplicantComponent implements OnInit {
  candicates: Candicate[] = listOfCandidates;
  myForm: FormGroup;
  myForm1: FormGroup;
  apiURL = '';
  id: FormControl;
  name: FormControl;
  email: FormControl;
  phone: FormControl;
  vacacyNumber: FormControl;
  position: FormControl;
  dateOfApplicant: FormControl;
  status: FormControl;
  experience: FormControl;
  nameOfTheInterviewer: FormControl;
  dateScheduled: FormControl;
  start: FormControl;
  end: FormControl;

  constructor(protected httpClient: HttpClient) {
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
    this.id = new FormControl('', Validators.required);
    this.vacacyNumber = new FormControl('', Validators.required);
    this.position = new FormControl('', Validators.required);
    // this.idPosition = new FormControl('', Validators.required);
    this.dateOfApplicant = new FormControl('', Validators.required);
    this.nameOfTheInterviewer = new FormControl('', Validators.required);
    this.dateScheduled = new FormControl('', Validators.required);
    // this.positionName = new FormControl('');
  }

  createForm1() {
    this.myForm1 = new FormGroup({
      id: this.id,
      vacacyNumber: this.vacacyNumber,
      position: this.position,
      dateOfApplicant: this.dateOfApplicant,
      nameOfTheInterviewer: this.nameOfTheInterviewer,
      dateScheduled: this.dateScheduled,
    });

  }

  createFormControls() {
    this.id = new FormControl('', Validators.required);
    this.name = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);
    this.phone = new FormControl('', Validators.required);
    this.vacacyNumber = new FormControl('', Validators.required);
    this.position = new FormControl('', Validators.required);
    // this.idPosition = new FormControl('', Validators.required);
    this.dateOfApplicant = new FormControl('', Validators.required);
    this.status = new FormControl('', Validators.required);
    this.experience = new FormControl('', Validators.required);
    this.nameOfTheInterviewer = new FormControl('', Validators.required);
    this.dateScheduled = new FormControl('', Validators.required);
    this.start = new FormControl('', Validators.required);
    this.end = new FormControl('', Validators.required);
    // this.positionName = new FormControl('');
  }

  createForm() {
    this.myForm = new FormGroup({
      id: this.id,
      name: this.name,
      email: this.email,
      phone: this.phone,
      vacacyNumber: this.vacacyNumber,
      position: this.position,
      dateOfApplicant: this.dateOfApplicant,
      status: this.status,
      experience: this.experience,
      nameOfTheInterviewer: this.nameOfTheInterviewer,
      dateScheduled: this.dateScheduled,
      start: this.start,
      end: this.end,
    });

  }

}

export class Candicate {
  id: string;
  name: string;
  email: string;
  phone: string;
  vacacyNumber: string;
  position: string;
  dateOfApplicant: any;
  status: string;
  experience: string;
  nameOfTheInterviewer: string;
  dateScheduled: any;
  start: any;
  end: any;

}


export const listOfCandidates = [
  {
    id: '15130147',
    name: 'Phuong',
    email: '...@gmail.com',
    phone: '093205304',
    vacacyNumber: 'V001',
    position: 'AI',
    dateOfApplicant: '8-7-2019',
    status: 'Processing',
    experience: 'Junior',
    nameOfTheInterviewer: 'Ho Chi Minh',
    dateScheduled: '18-7-2019',
    start: '11:00 AM',
    end: '11:30 AM'
  },
  {
    id: '15130125',
    name: 'Nhan',
    email: '...@gmail.com',
    phone: '093205304',
    vacacyNumber: 'V001',
    position: 'AI',
    dateOfApplicant: '8-7-2019',
    status: 'Processing',
    experience: 'Junior',
    nameOfTheInterviewer: 'Ho Chi Minh',
    dateScheduled: '18-7-2019',
    start: '11:00 AM',
    end: '11:30 AM'
  }
];
