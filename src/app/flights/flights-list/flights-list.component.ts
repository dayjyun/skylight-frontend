import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FlightsService } from '../../services/flights/flights.service';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css'],
})
export class FlightsListComponent implements OnInit {
  flights: any;
  flight: any;

  constructor(private flightsService: FlightsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.flightsService.getAllFlights().subscribe(data => {
      this.flights = data;
      console.log(data)
    })
  }
}
