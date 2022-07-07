import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AnimalPageComponent } from '../animal-page/animal-page.component';

@Component({
  selector: 'app-animal-list-item',
  templateUrl: './animal-list-item.component.html',
  styleUrls: ['./animal-list-item.component.css']
})
export class AnimalListItemComponent implements OnInit {

  @Input() item: any;

  @ViewChild(AnimalPageComponent)
  child!: AnimalPageComponent;

  constructor() { }

  ngOnInit(): void {
  }

  showPage(){
    this.child.toggleDisplay();
  }

}
