import { Component, OnInit } from '@angular/core';

import { FlightsService } from '../../services/flights/flights.service';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css'],
})
export class FlightsListComponent implements OnInit {
  flights: any;

  constructor(private flightsService: FlightsService) {}

  ngOnInit(): void {
    this.flightsService.getAllFlights().subscribe((data) => {
      this.flights = data;
    });
  }
}
