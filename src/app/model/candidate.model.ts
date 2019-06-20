import {VacancyNhan} from './vacancyNhan';
import {ScheduleInterviewDetails} from './schedule-interview-details.model';

export class Candidate {
  idApplicantVacancy: number;

  applicantNumber: string;
  applicantVacancyName: string;

  vacancy: VacancyNhan;
  dateOnApplicantVacancy: string;
  state: string;
  cv: string;
  scheduleInterviewDetails: ScheduleInterviewDetails;


  // id: string;
  // name: string;
  // emailApplicant: string;
  // phone: string;
  // vacacyNumber: string;
  // title: string;
  // dateOnApplicantVacancy: any;
  // status: string;
  // experience: number;
  // listIdUser: string;
  // dateOfTheScheduleInterview: any;
  // startTime: any;
  // endTime: any;
}
