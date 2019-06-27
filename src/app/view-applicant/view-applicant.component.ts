import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {CarrerService} from '../service/carrer.service';
import {Candidate} from '../model/candidate.model';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../model/user.model';
import {InterviewerScheduleI} from '../model/interviewer-scheduleI';
import {PositionService} from '../service/position.service';
import {CandidateService} from '../service/candidate.service';

@Component({
  selector: 'app-view-applicant',
  templateUrl: './view-applicant.component.html',
  styleUrls: ['./view-applicant.component.scss']
})
export class ViewApplicantComponent implements OnInit {
  map = new Map<string[], Candidate>();
  candicates: Candidate[];
  myForm: FormGroup;
  myForm1: FormGroup;
  apiURL = '';
  id: FormControl;
  name: FormControl;
  emailApplicant: FormControl;
  phone: FormControl;
  vacacyNumber: FormControl;
  position: FormControl;
  dateOfApplicant: FormControl;
  status: FormControl;
  experience: FormControl;
  nameOfTheInterviewer: FormControl;
  dateScheduled: FormControl;
  startTime: FormControl;
  endTime: FormControl;
  positionList = this.positionService.getAllPosition();

  constructor(protected httpClient: HttpClient,
              protected candidateService: CandidateService,
              protected route: ActivatedRoute,
              protected  positionService: PositionService,
  ) {
    // this.map.forEach((value: InterviewerScheduleI[], key: Candidate) => {
    //   console.log(key, value);
    // });

  }

  ngOnInit() {
    this.createFormControls();
    this.createFormControls1();
    this.createForm();
    this.createForm1();
    const id = this.route.snapshot.paramMap.get('id');

    if (this.id ) {
      console.log("id nek  "+id);
      this.getApplicantsByIdVacancy();

    } else {

      this.getAllApplicant();
    }
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
    this.emailApplicant = new FormControl('', Validators.required);
    this.phone = new FormControl('', Validators.required);
    this.vacacyNumber = new FormControl('', Validators.required);
    this.position = new FormControl('', Validators.required);
    // this.idPosition = new FormControl('', Validators.required);
    this.dateOfApplicant = new FormControl('', Validators.required);
    this.status = new FormControl('', Validators.required);
    this.experience = new FormControl('', Validators.required);
    this.nameOfTheInterviewer = new FormControl('', Validators.required);
    this.dateScheduled = new FormControl('', Validators.required);
    this.startTime = new FormControl('', Validators.required);
    this.endTime = new FormControl('', Validators.required);
    // this.positionName = new FormControl('');
  }

  createForm() {
    this.myForm = new FormGroup({
      id: this.id,
      name: this.name,
      emailApplicant: this.emailApplicant,
      phone: this.phone,
      vacacyNumber: this.vacacyNumber,
      position: this.position,
      dateOfApplicant: this.dateOfApplicant,
      status: this.status,
      experience: this.experience,
      nameOfTheInterviewer: this.nameOfTheInterviewer,
      dateScheduled: this.dateScheduled,
      startTime: this.startTime,
      endTime: this.endTime,
    });

  }

  getApplicantsByIdVacancy() {
    const id = this.route.snapshot.paramMap.get('id');
    this.candidateService.getApplicantsByIdVacancy(id).subscribe(resList => {
      this.map = resList[0],
        this.candicates = resList[1];
    });
  }


  getKeys() {
    return Array.from(this.map.keys());
  }

  getValues(map) {
    return Array.from(map.values());
  }

  getAllApplicant() {
    this.candidateService.getAllApplicants().subscribe(data => this.map = data);
  }
}



