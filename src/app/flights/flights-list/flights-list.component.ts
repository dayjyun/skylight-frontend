import { Component, OnInit } from '@angular/core';

import { FlightsService } from '../../services/flights/flights.service';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css'],
})
export class FlightsListComponent implements OnInit {
  /**
   * Holds the flight data.
   */
  flights: any;

  /**
   * Creates an instance of FlightsListComponent.
   * @param flightsService - The service used for retrieving flight data.
   */
  constructor(private flightsService: FlightsService) {}

  /**
   * Lifecycle hook that is called after the component is initialized.
   * Retrieves all flight data and assigns it to the `flights` property.
   */
  ngOnInit(): void {
    this.flightsService.getAllFlights().subscribe((data) => {
      this.flights = data;
    });
  }
}
