import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; 

@Injectable()

export class DataService {

  private goals = new BehaviorSubject<any>(['One goal', 'Another goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }
}
