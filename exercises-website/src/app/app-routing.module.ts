import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupCardComponent } from './group-card/group-card.component';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo:'/home', 
    pathMatch: 'full' 
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { 
    path: 'exercises', 
    component: GroupCardComponent
  },
  {
    path: 'exercises/:id',
    component: ExerciseDetailsComponent
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
