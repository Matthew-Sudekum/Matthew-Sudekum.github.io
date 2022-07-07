import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AnimalsComponent } from './animals/animals.component';
import { OrgsComponent } from './orgs/orgs.component';
import { OrgListItemComponent } from './org-list-item/org-list-item.component';
import { AnimalListItemComponent } from './animal-list-item/animal-list-item.component';
import { FiltersComponent } from './filters/filters.component';
import { AnimalPageComponent } from './animal-page/animal-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AnimalsComponent,
    OrgsComponent,
    OrgListItemComponent,
    AnimalListItemComponent,
    FiltersComponent,
    AnimalPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
