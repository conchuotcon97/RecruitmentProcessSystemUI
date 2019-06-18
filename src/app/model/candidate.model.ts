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
  // email: string;
  // phone: string;
  // vacacyNumber: string;
  // title: string;
  // dateOfApplicant: any;
  // status: string;
  // experience: number;
  // nameOfTheInterviewer: string;
  // dateScheduled: any;
  // start: any;
  // end: any;
}
