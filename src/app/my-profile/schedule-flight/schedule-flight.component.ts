import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AirportsService } from 'src/app/services/airports/airports.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-schedule-flight',
  templateUrl: './schedule-flight.component.html',
  styleUrls: ['./schedule-flight.component.css'],
})
export class ScheduleFlightComponent implements OnInit {
  airportData: any;
  originAirportSelect: any;
  destinationAirportSelect: any;
  // ticketId: any;
  // originData: any = {};
  destinationData: any = {};

  originAirportData: any = {};

  destinationAirportData: any = {};

  flightData: any = {};

  constructor(
    private airportsService: AirportsService,
    private userService: UsersService,
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

  // scheduleFlight() {
  //   this.airportsService.createFlightOrigin(
  //     this.originAirportSelect.airportCode,
  //     this.originData
  //   );
  //   this.airportsService
  //     .createFlightDestination(
  //       this.destinationAirportSelect.airportCode,
  //       this.destinationData
  //     )
  //     .subscribe((data: any) => {
  //       this.ticketId = data.id;
  //       this.airportData.push(data);
  //       this.userService.getScheduledFlights();
  //       this.router.navigate(['/air']);
  //     });
  // }

  createFlight() {
    this.airportsService.createFlight(this.originAirportSelect.airportCode, this.destinationAirportSelect.airportCode, this.flightData)
      .subscribe((data: any) => {
        this.router.navigate(['/air'])
      });
  }
}
