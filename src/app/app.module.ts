import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExerciseCardComponent } from './exercise-card/exercise-card.component';
import { GroupCardComponent } from './group-card/group-card.component';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { VideoUrlPipe } from './video-url.pipe';
import { DetailsPageControlsComponent } from './details-page-controls/details-page-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseCardComponent,
    GroupCardComponent,
    ExerciseDetailsComponent,
    PageNotFoundComponent,
    HomeComponent,
    VideoUrlPipe,
    DetailsPageControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
