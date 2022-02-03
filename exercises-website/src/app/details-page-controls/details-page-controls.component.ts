import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseDetailsComponent } from '../exercise-details/exercise-details.component';

@Component({
  selector: 'app-details-page-controls',
  templateUrl: './details-page-controls.component.html',
  styleUrls: ['./details-page-controls.component.css']
})
export class DetailsPageControlsComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private exerciseDetailsComponent: ExerciseDetailsComponent
  ) { }

  ngOnInit(): void {
  }

  goPrevious() {
    let previousId = this.exerciseDetailsComponent.exerciseId - 1;
    this.router.navigate(['/exercises', previousId])
  }

  goNext() {
    let nextId = +this.exerciseDetailsComponent.exerciseId + 1;
    this.router.navigate(['/exercises', nextId])
  }

  goToExercises() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  notFirst(): boolean {
    if(this.exerciseDetailsComponent.exerciseId > 1) {
      return true;
    }
    else {
      return false;
    }
  }

  notLast(): boolean {
    if(this.exerciseDetailsComponent.exercises.length > this.exerciseDetailsComponent.exerciseId) {
      return true;
    }
    else {
      return false;
    }
  }
  
}
