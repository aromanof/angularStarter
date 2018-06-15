import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  goalText: string = 'My first dynamic goal!';
  itemCount: number;
  goals = [""];

  constructor(private _data: DataService) { }

  ngOnInit() {
    console.log(this._data);
    this._data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  addItem(){
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  removeItem(i){
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);
  }
}
