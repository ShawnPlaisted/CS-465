import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit {
  trip: any;

  constructor(
    private route: ActivatedRoute,
    private tripService: TripService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const tripCode = this.route.snapshot.paramMap.get('tripCode');
    if (tripCode) {
      this.tripService.getTrip(tripCode).subscribe((data: any) => {
        this.trip = data;
      });
    }
  }

  editTrip(): void {
    this.router.navigate([`/edit/${this.trip.code}`]);
  }
}