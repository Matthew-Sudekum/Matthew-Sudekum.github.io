import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-page',
  templateUrl: './animal-page.component.html',
  styleUrls: ['./animal-page.component.css']
})
export class AnimalPageComponent implements OnInit {

  @Input() animal: any;
  container!:any;
  hidden:boolean = true;
  descText:string = "";
  goodWithText:string = "";
  
  constructor() { }

  ngOnInit(): void {
    this.container = document.getElementById("container");
    this.charReplace();
    this.constructGoodWithText();
  }

  charReplace() {
    this.descText = this.animal.attributes.descriptionText.replace(/&nbsp;/g, "");
    this.descText = this.descText.replace(/&#39;/g, "'");
    this.descText = this.descText.replace(/&rsquo;/g, "'");
    this.descText = this.descText.replace(/&lsquo;/g, "'");
    this.descText = this.descText.replace(/&rdquo;/g, "");
    this.descText = this.descText.replace(/&ldquo;/g, "");
  }

  toggleDisplay() {
    this.hidden = !this.hidden;
  }

  constructGoodWithText(){
    let counter:number = 0;
    let holderString:string = "";
    if(this.animal.attributes.isDogsOk == true) {
      holderString += "dogs";
      counter++;
    }
    if(this.animal.attributes.isCatsOk == true) {
      if(counter > 0){
        holderString += " and "
      }
      holderString += "cats";
      counter++;
    }
    if(this.animal.attributes.isKidsOk == true) {
      if(counter > 0){
        holderString += " and "
      }
      holderString += "kids";
      counter++;
    }
    if(counter > 0){
      holderString += "."
      this.goodWithText = "Is known to be good with " + holderString;
    }
  }

}
