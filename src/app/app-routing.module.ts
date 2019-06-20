import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarrerComponent} from './carrer/carrer.component';
import {RouterModule, Routes} from '@angular/router';
import {ViewApplicantComponent} from './view-applicant/view-applicant.component';
import {CreateApplicantComponent} from './create-applicant/create-applicant.component';
import {CreateVacancyComponent} from './create-vacancy/create-vacancy.component';
import {ReviewApplicantComponent} from './review-applicant/review-applicant.component';
// import {DetailCarerComponent} from './carrer/detail-carrer/detail-carer.component';
import {ChangedPasswordComponent} from './system/changed-password/changed-password.component';
import {ProfileComponent} from './system/profile/profile.component';
import {ManpowerRequestComponent} from './recruitment/manpower-request/manpower-request.component';
import {ApplicantApprovalComponent} from './recruitment/applicant-approval/applicant-approval.component';
import {ManpowerRequestManagerComponent} from './recruitment/manpower-request-manager/manpower-request-manager.component';
import {ViewReviewApplicantComponent} from './view-review-applicant/view-review-applicant.component';
import {ViewVacancyComponent} from './view-vacancy/view-vacancy.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './service/auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'carrer', component: CarrerComponent},
  // {path: 'carrer/:id', component: DetailCarerComponent},
  {
    path: 'view-applicant',
    component: ViewApplicantComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_HR']}
  },
  {path: 'view-vacancy', component: ViewVacancyComponent, canActivate: [AuthGuard], data: {roles: ['ROLE_HR']}},
  {path: 'hr/create-applicant/:vacancyNumber', component: CreateApplicantComponent},
  {path: 'hr/create-vacancy', component: CreateVacancyComponent},
  {path: 'interviewer/review-applicant', component: ReviewApplicantComponent},
  {path: 'interviewer/view-review-applicant', component: ViewReviewApplicantComponent},
  {path: 'system/profile', component: ProfileComponent},
  {path: 'system/changed-password', component: ChangedPasswordComponent},
  {path: 'recruitment/manpower-request', component: ManpowerRequestComponent},
  {path: 'recruitment/manpower-request-manager', component: ManpowerRequestManagerComponent},
  {path: 'recruitment/applicant-approval', component: ApplicantApprovalComponent},
  {path: 'view-vacancy', component: ViewVacancyComponent}
];

@NgModule({
  declarations: [],
  imports: [

    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
