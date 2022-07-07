import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-org-list-item',
  templateUrl: './org-list-item.component.html',
  styleUrls: ['./org-list-item.component.css']
})
export class OrgListItemComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }

}
