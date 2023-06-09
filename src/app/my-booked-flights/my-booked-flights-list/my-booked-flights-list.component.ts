import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-my-booked-flights-list',
  templateUrl: './my-booked-flights-list.component.html',
  styleUrls: ['./my-booked-flights-list.component.css'],
})
export class MyBookedFlightsListComponent implements OnInit {
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
    this.usersService.getMyTickets().subscribe((data) => {
      this.flights = data;
    });
  }
}
