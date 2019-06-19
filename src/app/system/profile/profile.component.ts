import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {User} from '../../model/user.model';
import {UserService} from '../../service/user.service';
import {apiRoot} from '../../app.component';
import {Department} from '../../model/department.model';
import {Position} from '../../model/position.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileInf: User;
  myForm: FormGroup;
  userNumber: FormControl;
  fullName: FormControl;
  username: FormControl;
  birthday: FormControl;
  gender: FormControl;
  address: FormControl;
  email: FormControl;
  phone: FormControl;
  idPosition: FormControl;
  idDepartment: FormControl;
  position: Position;
  department: Department;
  positionName: FormControl;
  departmentName: FormControl;

  constructor(protected httpClient: HttpClient,
              protected userService: UserService,
              protected fBuild: FormBuilder) {
  }

  ngOnInit() {
    // this.createFormControls();
    // this.createForm();
    this.getProfile();

  }

  getProfile() {
    this.userService.getProfileUser().subscribe(res => this.profileInf = res);
  }

  onsubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);

      this.httpClient.put(`${apiRoot}/user`, this.myForm.value);
      this.myForm.reset();
    }
  }


  createFormControls() {
    this.userNumber = new FormControl(`${this.profileInf.userNumber}`, Validators.required);
    this.fullName = new FormControl(`${this.profileInf.fullName}`, Validators.required);
    this.username = new FormControl(`${this.profileInf.username}`, Validators.required);
    this.birthday = new FormControl(`${this.profileInf.birthday}`, Validators.required);
    this.gender = new FormControl(`${this.profileInf.gender}`, Validators.required);
    this.address = new FormControl(`${this.profileInf.address}`, Validators.required);
    this.email = new FormControl(`${this.profileInf.email}`, Validators.required);
    this.phone = new FormControl(`${this.profileInf.phone}`, Validators.required);
    this.positionName = new FormControl(`${this.profileInf.position.positionName}`, Validators.required);
    this.departmentName = new FormControl(`${this.profileInf.department.departmentName}`, Validators.required);
    this.idPosition = new FormControl(`${this.profileInf.position.idPosition}`, Validators.required);
    this.idDepartment = new FormControl(`${this.profileInf.department.idDepartment}`, Validators.required);

  }

  createForm() {
    this.myForm = new FormGroup({
      userNumber: this.userNumber,
      fullName: this.fullName,
      username: this.username,
      birthday: this.birthday,
      gender: this.gender,
      address: this.address,
      email: this.email,
      phone: this.phone,
      position: new FormGroup({
        idPosition: this.idPosition,
        positionName: this.positionName
      }),
      department: new FormGroup({
        idDepartment: this.idDepartment,
        departmentName: this.departmentName
      }),
    });
  }

}
