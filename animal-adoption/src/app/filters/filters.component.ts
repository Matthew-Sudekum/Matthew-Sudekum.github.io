import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { filters } from '../model/filters';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor() { }

  @Output() filterOptions = new EventEmitter<Object>();
  
  menuShown: boolean = false;
  menu:any;

  options:any;
  optionValues:filters = {
    breed: [1, 1],
    ageGroup: [1, 1, 1, 1],
    coatLength: [1, 1, 1],
    gender: [1, 1],
    goodWith: [0, 0, 0],
    size: [1, 1, 1]
  };

  ngOnInit(): void {
    this.menu = document.getElementById("menu");
    this.options = document.getElementsByClassName("toggle");
    this.filterOptions.emit(this.optionValues);
  }

  toggleMenu() {
    this.menuShown = !this.menuShown;
    this.animateMenu();
  }

  toggleOptionChecked(group: keyof typeof this.optionValues, option: number, element:number) {
    this.options[element].classList.toggle("checked");
    if(this.optionValues[group][option] == 0) {
      this.optionValues[group][option] = 1;
    }
    else {
      this.optionValues[group][option] = 0;
      if(this.checkForMinActive(group) == false){
        this.optionValues[group][option] = 1;
        this.options[element].classList.toggle("checked");
      }
    }
    this.filterOptions.emit(this.optionValues);
  }

  checkForMinActive(group: keyof typeof this.optionValues): boolean{
    let minMet = false;
    if(group != "goodWith"){
      for(let i = 0; i<this.optionValues[group].length; i++){
        if(minMet == false){
          if(this.optionValues[group][i] == 0) { }
          else {
            minMet = true
          }
        }
      }
    }
    else{
      minMet = true;
    }
    return minMet;
  }

  animateMenu() {
    if(this.menu.classList == "menu"){
      this.menu?.classList.toggle("expand");
    }
    else{
      this.menu?.classList.toggle("expand");
      this.menu?.classList.toggle("shrink");
    }
  }
}
