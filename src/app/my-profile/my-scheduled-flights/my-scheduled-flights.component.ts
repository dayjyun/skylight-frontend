import { Component, OnInit } from '@angular/core';
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
  constructor(private usersService: UsersService) {}

  /**
   * Lifecycle hook that is called after the component is initialized.
   * Retrieves the user's tickets and assigns the data to the `flights` property.
   */
  ngOnInit(): void {
    this.usersService.getScheduledFlights().subscribe((data) => {
      this.flights = data;
    });
  }
}
