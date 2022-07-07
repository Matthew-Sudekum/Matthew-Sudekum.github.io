import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { FiltersComponent } from '../filters/filters.component';
import { filters } from '../model/filters';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  postalcode = 0;
  distance = 25;
  page = 1;

  filters!: filters;

  @ViewChild(FiltersComponent)
  filterChild!: FiltersComponent;

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
    this.apiService.getFilterData(this.filters);
    this.apiService.searchAnimals(this.postalcode, this.distance, this.page);
    if(this.filterChild.menuShown == true){
      this.filterChild.toggleMenu();
    }
  }

  updateFilters(data: any){
    this.filters = data;
  }

  nextPage(){
    this.page++;
    this.apiService.searchAnimals(this.postalcode, this.distance, this.page);
  }

  prevPage(){
    this.page--;
    this.apiService.searchAnimals(this.postalcode, this.distance, this.page);
  }
}
