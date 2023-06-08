import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-booked-flight-details',
  templateUrl: './my-booked-flight-details.component.html',
  styleUrls: ['./my-booked-flight-details.component.css'],
})
export class MyBookedFlightDetailsComponent implements OnInit {
  /**
   * Holds the flight data.
   */
  flight: any;

  /**
   * Creates an instance of FlightDetailsComponent.
   * @param route - The activated route containing the route parameters.
   * @param usersService - The service used for retrieving user tickets.
   */
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  /**
   * Lifecycle hook that is called after the component is initialized.
   * Retrieves the user's tickets and assigns the flight data matching the route parameter 'id' to the `flight` property.
   */
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.usersService.getMyTickets().subscribe((data: any) => {
        let paramId: string = params.get('id') || '';
        this.flight = data.find((flight: any) => {
          return flight.id === +paramId;
        });
      });
    });
  }
}
