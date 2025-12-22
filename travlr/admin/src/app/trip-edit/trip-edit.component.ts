import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trip-edit',
  templateUrl: './trip-edit.component.html',
  styleUrls: ['./trip-edit.component.css']
})
export class TripEditComponent {
  @Input() trip: any;

  saveTrip() {
    console.log('Save button working');
  }
}