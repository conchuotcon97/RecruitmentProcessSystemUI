import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Position} from "../model/position.model";
import {PositionService} from "../service/position.service";
import {apiRoot} from "../app.component";

@Component({
  selector: 'app-create-applicant',
  templateUrl: './create-applicant.component.html',
  styleUrls: ['./create-applicant.component.scss']
})
export class CreateApplicantComponent implements OnInit {
  myForm: FormGroup;
  id: FormControl;
  name: FormControl;
  email: FormControl;
  phone: FormControl;
  vacacyNumber: FormControl;
  idPosition :FormControl;
  positionName: FormControl;
  dateOfApplicant: FormControl;
  status: FormControl;
  experience: FormControl;
  nameOfTheInterviewer: FormControl;
  dateScheduled: FormControl;
  start: FormControl;
  end: FormControl;
  positionList: Position[]=[];
  cv : FormControl;
  constructor(protected httpClient: HttpClient , private positionService: PositionService) {
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.getPositionList();
  }
  getPositionList() {
    this.positionService.getAllPosition().subscribe((data: Position[]) => {
      this.positionList = data;
    });
  }

  onsubmit() {
    console.log(this.myForm.value);
    this.httpClient.post(`${apiRoot}/hr/applicantVacancy/${this.myForm.value.vacancyNumber}/addApplicantVacancy`, this.myForm.value);
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.myForm.reset();
    }

  }


  createFormControls() {
    this.id = new FormControl('', Validators.required);
    this.name = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);
    this.phone = new FormControl('', Validators.required);
    this.vacacyNumber = new FormControl('', Validators.required);
    this.idPosition = new FormControl('', Validators.required);
    this.dateOfApplicant = new FormControl('', Validators.required);
    this.status = new FormControl('', Validators.required);
    this.experience = new FormControl('', Validators.required);
    this.nameOfTheInterviewer = new FormControl('', Validators.required);
    this.dateScheduled = new FormControl('', Validators.required);
    this.start = new FormControl('', Validators.required);
    this.end = new FormControl('', Validators.required);
    this.positionName = new FormControl('');
    this.cv = new FormControl('');
  }

  createForm() {
    this.myForm = new FormGroup({
      id: this.id,
      name: this.name,
      email: this.email,
      phone: this.phone,
      vacacyNumber: this.vacacyNumber,
      position: new FormGroup({
        positionName: this.positionName,
        idPosition: this.idPosition
      }),
      dateOfApplicant: this.dateOfApplicant,
      status: this.status,
      experience: this.experience,
      nameOfTheInterviewer: this.nameOfTheInterviewer,
      dateScheduled: this.dateScheduled,
      start: this.start,
      end: this.end,
      cv: this.cv
    });

  }
  selectPosition($event): FormControl {
    this.getPositionList();
    const id = $event;
    const positionName = this.positionList.find(po => po.idPosition = id).positionName;
    this.positionName.setValue(positionName);
    this.idPosition.setValue( Number.parseInt(id));
    return this.positionName;
  }
}

