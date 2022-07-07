import { Injectable } from '@angular/core';
import { criteria } from './model/criteria';
import { filters } from './model/filters';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor() { }

  criteria:criteria = {
    ageGroup: [],
    coatLength: [],
    gender: [],
    sizeGroup: []
  };
  criteriaTemplate = {
    ageGroup: ["Baby","Young","Adult","Senior"],
    coatLength: ["Short","Medium", "Long"],
    gender: ["Male","Female"],
    sizeGroup: ["Small", "Medium", "Large"]
  };
  items = [];
  filters = [
    {
      "fieldName": "statuses.name",
      "operation": "equals",
      "criteria": "Available"
    }
  ];
  filterProcess:string = ""

  filterOptions!: filters;

  async searchOrgs(postalcode: any, distance: any, page:number) {
    const response = await fetch('https://api.rescuegroups.org/v5/public/orgs/search/?limit=12&page='+page+'&sort=orgs.distance', {
      method: 'POST',
      headers: {
        'Content-Type':'application/vnd.api+json',
        'Authorization':'yQf20ay8'
      },
      body: JSON.stringify({
        data: {
          'filterRadius':{
            'postalcode': postalcode,
            'miles': distance
          }
        }
      })
    });
    const result = await response.json();
    if(result.data != undefined){
      this.items = result.data;
    }
    console.log(this.items);
  }

  async searchAnimals(postalcode: any, distance: any, page:number) {
    const response = await fetch('https://api.rescuegroups.org/v5/public/animals/search/?limit=12&page='+page+'&sort=animals.distance', {
      method: 'POST',
      headers: {
        'Content-Type':'application/vnd.api+json',
        'Authorization':'yQf20ay8'
      },
      body: JSON.stringify({
        data: {
          'filterRadius':{
            'postalcode': postalcode,
            'miles': distance
          },
          'filters':this.filters,
          "filterProcessing": this.filterProcess
        }
      })
    });
    const result = await response.json();
    if(result.data != undefined){
      this.items = result.data;
    }
    console.log(this.items);
  }

  getFilterData(data: filters) {
    this.filterOptions = data;
    this.applyFilters();
  }
  applyFilters(){
    this.resetFilters();
    let groupCount = 0;
    let fieldCount = 1;

    if(this.filterOptions.breed[0] == 1){
      this.filters.push({
        "fieldName": "species.singular",
        "operation": "equals",
        "criteria": "Dog"
      });
      groupCount++;
      fieldCount++;
    }else if(this.filterOptions.breed[0] == 0){}
    if(this.filterOptions.breed[1] == 1){
      this.filters.push({
        "fieldName": "species.singular",
        "operation": "equals",
        "criteria": "Cat"
      });
      groupCount++;
      fieldCount++;
    }else if(this.filterOptions.breed[1] == 0){}
    if(groupCount == 1){
      this.filterProcess += " AND 2";
    }
    else if(groupCount == 2){
      this.filterProcess += " AND (2 OR 3)";
    }

    groupCount = 0;
    for(let i = 0; i < this.filterOptions.ageGroup.length; i++){
      if(this.filterOptions.ageGroup[i] == 1){
        this.criteria.ageGroup.push(this.criteriaTemplate.ageGroup[i]);
        groupCount++;
      }else {}
    }
    if(groupCount != 4){
      this.filters.push({
        "fieldName": "animals.ageGroup",
        "operation": "equals",
        // @ts-expect-error
        "criteria": this.criteria.ageGroup
      });
      fieldCount++;
      this.filterProcess += " AND " + fieldCount;
    }

    groupCount = 0;
    for(let i = 0; i < this.filterOptions.coatLength.length; i++){
      if(this.filterOptions.coatLength[i] == 1){
        this.criteria.coatLength.push(this.criteriaTemplate.coatLength[i]);
        groupCount++;
      }else {}
    }
    if(groupCount != 3){
      this.filters.push({
        "fieldName": "animals.coatLength",
        "operation": "equals",
        // @ts-expect-error
        "criteria": this.criteria.coatLength
      });
      fieldCount++;
      this.filterProcess += " AND " + fieldCount;
    }

    groupCount = 0;
    for(let i = 0; i < this.filterOptions.gender.length; i++){
      if(this.filterOptions.gender[i] == 1){
        this.criteria.gender.push(this.criteriaTemplate.gender[i]);
        groupCount++;
      }else {}
    }
    if(groupCount != 2){
      this.filters.push({
        "fieldName": "animals.sex",
        "operation": "equals",
        // @ts-expect-error
        "criteria": this.criteria.gender
      });
      fieldCount++;
      this.filterProcess += " AND " + fieldCount;
    }

    if(this.filterOptions.goodWith[0] == 1){
      this.filters.push({
        "fieldName": "animals.isKidsOk",
        "operation": "equals",
        "criteria": "true"
      });
      fieldCount++;
      this.filterProcess += " AND " + fieldCount;
    }else if(this.filterOptions.goodWith[0] == 0){}

    if(this.filterOptions.goodWith[1] == 1){
      this.filters.push({
        "fieldName": "animals.isDogsOk",
        "operation": "equals",
        "criteria": "true"
      });
      fieldCount++;
      this.filterProcess += " AND " + fieldCount;
    }else if(this.filterOptions.goodWith[1] == 0){}

    if(this.filterOptions.goodWith[2] == 1){
      this.filters.push({
        "fieldName": "animals.isCatsOk",
        "operation": "equals",
        "criteria": "true"
      });
      fieldCount++;
      this.filterProcess += " AND " + fieldCount;
    }else if(this.filterOptions.goodWith[2] == 0){}

    groupCount = 0;
    for(let i = 0; i < this.filterOptions.size.length; i++){
      if(this.filterOptions.size[i] == 1){
        this.criteria.sizeGroup.push(this.criteriaTemplate.sizeGroup[i]);
        groupCount++;
      }else {}
    }
    if(groupCount != 3){
      this.filters.push({
        "fieldName": "animals.sizeGroup",
        "operation": "equals",
        // @ts-expect-error
        "criteria": this.criteria.sizeGroup
      });
      fieldCount++;
      this.filterProcess += " AND " + fieldCount;
    }
  }
  resetFilters(){
    this.criteria.ageGroup = [];
    this.criteria.coatLength = [];
    this.criteria.gender = [];
    this.criteria.sizeGroup = [];
    this.filters = [
      {
        "fieldName": "statuses.name",
        "operation": "equals",
        "criteria": "Available"
      }
    ];
    this.filterProcess = "1";
  }
}
