import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CreateVacancyComponent} from './create-vacancy/create-vacancy.component';
import {MenuComponent} from './menu/menu.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {CreateApplicantComponent} from './create-applicant/create-applicant.component';
import {SearchApplicantComponent} from './search-applicant/search-applicant.component';
import {ViewApplicantComponent} from './view-applicant/view-applicant.component';
import {CarrerComponent} from './carrer/carrer.component';
import {AppRoutingModule} from './app-routing.module';
import {ReviewApplicantComponent} from './review-applicant/review-applicant.component';
import {CarrerService} from './service/carrer.service';
import {HttpClientModule} from '@angular/common/http';

import {PositionService} from './service/position.service';


import {DepartmentService} from './service/department.service';
// import { SystemComponent } from './system/system.component';
import {ChangedPasswordComponent} from './system/changed-password/changed-password.component';
import {ProfileComponent} from './system/profile/profile.component';
import {RecruitmentComponent} from './recruitment/recruitment.component';
import {ApplicantApprovalComponent} from './recruitment/applicant-approval/applicant-approval.component';
import {ManpowerRequestManagerComponent} from './recruitment/manpower-request-manager/manpower-request-manager.component';
import {ViewReviewApplicantComponent} from './view-review-applicant/view-review-applicant.component';
import {ViewVacancyComponent} from './view-vacancy/view-vacancy.component';
import {ManpowerRequestComponent} from './recruitment/manpower-request/manpower-request.component';
import {UserService} from './service/user.service';
import {AuthenticationService} from './service/authentication.service';
import {TranslatePipe} from './pipe/translate.pipe';
import {TranslateService} from './service/translate.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from './service/auth.guard';
import {DetailCarerComponent} from "./view-vacancy/detail-carrer/detail-carer.component";

// import { ViewVacancyComponent } from './view-vacancy/view-vacancy.component';
export function setupTranslateFactory(
  // tslint:disable-next-line:ban-types
  service: TranslateService): Function {
  return () => service.use('en');
}

@NgModule({
  declarations: [
    AppComponent,
    CreateVacancyComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CreateApplicantComponent,
    SearchApplicantComponent,
    ViewApplicantComponent,
    CarrerComponent,
    ReviewApplicantComponent,
    DetailCarerComponent,
    // SystemComponent,
    ChangedPasswordComponent,
    ProfileComponent,
    RecruitmentComponent,
    ApplicantApprovalComponent,
    ManpowerRequestManagerComponent,
    ManpowerRequestComponent,
    ViewReviewApplicantComponent,
    ViewVacancyComponent,
    TranslatePipe,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,

    ReactiveFormsModule,
    // HttpClientXsrfModule.withOptions({cookieName: 'XSRF-TOKEN'})
  ],
  providers: [CarrerService,
    PositionService,
    DepartmentService,
    UserService,
    AuthenticationService,
    TranslateService,
    AuthGuard ,

    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
    }
    ],
  bootstrap: [AppComponent]

})

export class AppModule { }
