import { Component, OnInit } from '@angular/core';
import { TripService, Trip } from '../trip.service';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html'
})
export class TripsListComponent implements OnInit {

  trips: Trip[] = [];

  constructor(private tripService: TripService) {}

  ngOnInit(): void {
    this.tripService.getTrips().subscribe(data => {
      this.trips = data;
    });
  }

}