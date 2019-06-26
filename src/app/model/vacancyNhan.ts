import {User} from './user.model';
import {Department} from './department.model';
import {Position} from './position.model';
import {Timestamp} from 'rxjs';

export class VacancyNhan {
  public numberOpening: number;
  public idVacancy: number;
  public offer: string;
  public vacancyNumber: string;
  public dateCreated: Date ;
  ownedBy: User;

  position: Position;
  public state: string;
  public description: string;

  department: Department;
  public dateClose: Date ;
  public requirement: string;

  public experience: number;
  public language: string;
  public degree: string;
  public typeOfStaff: string;

  public constructor(init?: Partial<VacancyNhan>) {
    Object.assign(this, init);

  }
}

// type RecursivePartial<T> = {
//   [P in keyof T]?: RecursivePartial<T[P]>;
// };
