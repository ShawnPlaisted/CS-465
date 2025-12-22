import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TripsListComponent } from './trips-list/trips-list.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';
import { TripEditComponent } from './trip-edit/trip-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TripsListComponent,
    TripDetailComponent,
    TripEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }