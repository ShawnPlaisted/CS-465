import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TripsListComponent } from './trips-list/trips-list.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';
import { TripEditComponent } from './trip-edit/trip-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'trips', pathMatch: 'full' },
  { path: 'trips', component: TripsListComponent },
  { path: 'trip/:tripCode', component: TripDetailComponent },
  { path: 'edit/:tripCode', component: TripEditComponent },
  { path: '**', redirectTo: 'trips' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}