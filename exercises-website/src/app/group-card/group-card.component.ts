import { Component, Input, OnInit } from '@angular/core';
import { DATA } from '../../data';
import { Exercise } from '../model/exercise';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.css']
})
export class GroupCardComponent implements OnInit {

  exercises = DATA;

  @Input()
  exercise!: Exercise;

  groups: string[] = [];
  distinctGroups: string[] = [];

  currentGroup!: string;

  constructor() { }

  ngOnInit(): void {
    this.filterArray();
  }
  
  findGroups() {
    for(let obj of this.exercises){
      this.groups.push(obj.group);
    }
  }

  filterArray() {
    this.findGroups();
    this.distinctGroups = [...new Set(this.groups)];
  }
  
}
