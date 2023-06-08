import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../../services/flights/flights.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css'],
})
export class FlightDetailsComponent implements OnInit {
  /**
   * Holds the flight data.
   */
  flight: any;

  /**
   * Creates an instance of FlightDetailsComponent.
   * @param route - The activated route containing the route parameters.
   * @param flightsService - The service used for retrieving flight data.
   */
  constructor(
    private route: ActivatedRoute,
    private flightsService: FlightsService
  ) {}

  /**
   * Lifecycle hook that is called after the component is initialized.
   * Retrieves the flight data based on the route parameter and assigns it to the `flight` property.
   */
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.flightsService.getAllFlights().subscribe((data: any) => {
        let paramId: string = params.get('id') || '';
        this.flight = data.find((flight: any) => {
          return flight.id === parseInt(paramId);
        });
      });
    });
  }
}
