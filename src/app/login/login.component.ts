import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '../service/translate.service';
import {User} from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // user = new user();
  credentials = {username: '', password: ''};
  error = '';
  invalidLogin = false;
  loginForm: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor(private router: Router,
              private loginservice: AuthenticationService,
              private translate: TranslateService) {
  }

  ngOnInit() {
    this.createFormControl();
    this.createFormGroup();
    // this.translate.use('en').then(() => {
    //   console.log(this.translate.data);
    // });
  }

  createFormControl() {
    this.username = new FormControl('', [Validators.required, Validators.minLength(4)]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(4)]);
  }

  createFormGroup() {
    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  checkLogin() {
    this.loginservice.authenticate(this.username.value, this.password.value).subscribe(
      (data) => {
        if (data['name']) {
          this.router.navigate(['/view-vacancy']);
          this.invalidLogin = false;
        } else {
          this.error = 'Username or password invalid';
        }
      },
      error => {
        this.invalidLogin = true,
          this.error = error;
      }
    )
    ;
  }
}

// export class user{
//   username:string;
//   pass:string;
// }
