import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FlightsService } from '../../services/flights/flights.service';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css'],
})
export class FlightsListComponent implements OnInit {
  constructor(
    private flightsService: FlightsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {}

  flights = this.flightsService.getAllFlights();
}
