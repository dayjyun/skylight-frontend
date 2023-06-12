import { Component, OnInit } from '@angular/core';
import { FlightsService } from 'src/app/services/flights/flights.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-my-scheduled-flights',
  templateUrl: './my-scheduled-flights.component.html',
  styleUrls: ['./my-scheduled-flights.component.css'],
})
export class MyScheduledFlightsComponent implements OnInit {
  /**
   * Holds the flight data.
   */
  flights: any;

  /**
   * Creates an instance of FlightComponent.
   * @param usersService - The service used for retrieving user tickets.
   */
  constructor(private usersService: UsersService, private flightsService: FlightsService) {}

  /**
   * Lifecycle hook that is called after the component is initialized.
   * Retrieves the user's tickets and assigns the data to the `flights` property.
   */
  ngOnInit(): void {
    this.usersService.getScheduledFlights().subscribe((data) => {
      this.flights = data;
    });
  }

  /**
   * Deletes flight data by using the flight ID
   * @param flightId - The target flight to delete
   */
  deleteFlight(flightId: number): void {
    this.flightsService.deleteFlightById(+flightId).subscribe((data: any) => {
      this.flights = this.flights.filter((flight: any) => flight.id !== flightId);
    })
  }
}
