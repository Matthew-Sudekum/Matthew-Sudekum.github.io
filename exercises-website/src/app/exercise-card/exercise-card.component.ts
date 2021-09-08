import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DATA } from '../../data';
import { Exercise } from '../model/exercise';

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.css']
})
export class ExerciseCardComponent implements OnInit {

  @Input()
  exercise!: Exercise;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(id: number) {
    this.router.navigate([id], {relativeTo: this.route});
  }
  
}
