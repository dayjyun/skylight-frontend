import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../../services/flights/flights.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css'],
})
export class FlightDetailsComponent implements OnInit {
  flight: any;

  constructor(
    private route: ActivatedRoute,
    private flightsService: FlightsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.flightsService.getAllFlights().subscribe((data: any) => {
        let paramId: string = params.get('id') || '';
        this.flight = data.find((flight: any) => {
          return flight?.id === +paramId;
        });
      });
    });
  }
}
