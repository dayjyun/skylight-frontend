import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AirportsService } from 'src/app/services/airports/airports.service';

@Component({
  selector: 'app-schedule-flight',
  templateUrl: './schedule-flight.component.html',
  styleUrls: ['./schedule-flight.component.css'],
})
export class ScheduleFlightComponent implements OnInit {
  airportData: any;
  originAirportSelect: any;
  destinationAirportSelect: any;
  destinationData: any = {};
  originAirportData: any = {};

  destinationAirportData: any = {};
  flightData: any = {};

  constructor(
    private airportsService: AirportsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllAirports();
  }

  getAllAirports(): void {
    this.airportsService.getAllAirports().subscribe((data: any) => {
      this.airportData = data;
    });
  }

  saveOriginAirportSelect(airport: any) {
    this.airportsService
      .getAirportById(airport.target.value)
      .subscribe((data: any) => {
        this.originAirportSelect = data;
      });
  }

  saveDestinationAirportSelect(airport: any) {
    this.airportsService
      .getAirportById(airport.target.value)
      .subscribe((data: any) => {
        this.destinationAirportSelect = data;
      });
  }

  createFlight() {
    this.airportsService.createFlight(this.originAirportSelect.airportCode, this.destinationAirportSelect.airportCode, this.flightData)
      .subscribe((data: any) => {
        this.router.navigate(['/air'])
      });
  }
}
