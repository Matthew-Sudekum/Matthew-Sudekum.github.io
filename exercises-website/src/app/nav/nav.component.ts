import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  toggleActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNav(){
    if (this.toggleActive) {
      this.toggleActive = false;
    }
    else {
      this.toggleActive = true;
    }
  }

  returnNavToggle() {
    if (this.toggleActive === true) {
      return 'active';
    }
    else {
      return 'disabled';
    }
  }
}
