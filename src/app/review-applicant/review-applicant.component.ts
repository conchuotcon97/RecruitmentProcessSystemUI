import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ReviewService} from "../service/review.service";
import {Review} from "../model/review";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-review-applicant',
  templateUrl: './review-applicant.component.html',
  styleUrls: ['./review-applicant.component.scss']
})
export class ReviewApplicantComponent implements OnInit {
  reviews: Review[];
  myForm: FormGroup;
  apiURL = '';
  // exps: string[] = ['Fresher', 'Internship', 'Senior'];
  results: string[] = ['Pass', 'Fail', 'Consider'];
  applicantNumber: FormControl;
  position: FormControl;
  positionRecommend: FormControl;
  technicalReview: FormControl;
  behaviorReview: FormControl;
  languageReview: FormControl;
  result: FormControl;
  note: FormControl;

  constructor(protected httpClient: HttpClient,
              protected  reviewService: ReviewService,
              protected route: ActivatedRoute,
  ) {
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
    this.applicantNumber = new FormControl('', Validators.required);
    this.position = new FormControl('', Validators.required);
    this.positionRecommend = new FormControl('', Validators.required);
    this.technicalReview = new FormControl('', Validators.required);
    this.behaviorReview = new FormControl('', Validators.required);
    this.languageReview = new FormControl('', Validators.required);
    this.result = new FormControl('', Validators.required);
    this.note = new FormControl('', Validators.required);

  }


  createForm() {
    this.myForm = new FormGroup({
      applicantNumber: this.applicantNumber,
      position: this.position,
      positionRecommend: this.positionRecommend,
      technicalReview: this.technicalReview,
      behaviorReview: this.behaviorReview,
      languageReview: this.languageReview,
      result: this.result,
      note: this.note
    });
  }



  addReview() {
    const id = this.route.snapshot.paramMap.get('id');
    this.reviewService.addReview(id).subscribe(res => {
      console.log(res);
      this.myForm.reset();

    });
  }

}
