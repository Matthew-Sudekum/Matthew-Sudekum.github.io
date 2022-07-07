import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-orgs',
  templateUrl: './orgs.component.html',
  styleUrls: ['./orgs.component.css']
})
export class OrgsComponent implements OnInit {

  postalcode = 0;
  distance = 25;
  page = 1;

  constructor(public apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.items = [];
  }

  zipCodeChanged(e:any) {
    this.postalcode = e.target.value;
  }

  distanceChanged(e:any) {
    this.distance = e.target.value;
  }

  search(){
    this.page = 1;
    this.apiService.searchOrgs(this.postalcode, this.distance, this.page);
  }

  nextPage(){
    this.page++;
    this.apiService.searchOrgs(this.postalcode, this.distance, this.page);
  }

  prevPage(){
    this.page--;
    this.apiService.searchOrgs(this.postalcode, this.distance, this.page);
  }
  
}