import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navDropped: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  burgerOutInAnim() {
    this.navDropped = !this.navDropped;
  }
}
