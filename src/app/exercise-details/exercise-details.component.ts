import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Exercise } from '../model/exercise';
import { DATA } from 'src/data';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.css']
})
export class ExerciseDetailsComponent implements OnInit {

  exercises = DATA;

  @Input()
  exercise!: Exercise;

  public exerciseId: any;

  constructor( private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.exerciseId = id;
    });
    this.checkUrl();
  }

  checkUrl() {
    let url: string = this.route.snapshot.url[1].path;
    let charArray: any = url.split("");
    let invalidUrl: boolean = false;
    for(let char of charArray) {
      if(isNaN(char)){
        invalidUrl = true;
      }
      else { }
    }
    if (parseInt(url) < 1 || parseInt(url) > this.exercises.length){
      invalidUrl = true;
    }
    if(invalidUrl == true){
      this.router.navigate(['/404', {id: url}]);
    }
    else { }
  }

  assignExercise() {
    this.exercise = this.exercises[this.exerciseId - 1];

    //Check and define to avoid undefined error
    if(this.exercise == undefined) {
      this.exercise = this.exercises[0];
    }
    else { }
  }
  
}
